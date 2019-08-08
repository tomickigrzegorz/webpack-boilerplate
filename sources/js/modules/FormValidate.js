import { docGetElementById, docQuerySelector } from '../helpers/elements';
import '../../scss/modules/_form.scss';

const form = {
  formName: '.form',
  classError: 'error',
  classItemForm: '.item-form',
  successSend:
    '<h2>Dziękuję.<br>Postaram się jak najszybciej odpowiedzieć.</h2>',
  errorSend: 'Wystąpił błąd, proszę wysłać ponownie formularz',
};

class FormValidate {
  prepareElements() {
    docQuerySelector(form.formName).setAttribute('novalidate', 'novalidate');
    const elements = docQuerySelector(form.formName).querySelectorAll(
      '[required]'
    );
    [...elements].forEach(element => {
      if (element.nodeName.toUpperCase() === 'INPUT') {
        const type = element.type.toUpperCase();

        if (type === 'TEXT') {
          element.addEventListener('input', e => {
            this.testInputText(e.target);
          });
        }
        if (type === 'EMAIL') {
          element.addEventListener('input', e => {
            this.testInputEmail(e.target);
          });
        }
        if (type === 'URL') {
          element.addEventListener('input', e => {
            this.testInputURL(e.target);
          });
        }
        if (type === 'CHECKBOX') {
          element.addEventListener('click', e => {
            this.testInputCheckbox(e.target);
          });
        }
        if (type === 'RADIO') {
          element.addEventListener('click', e => {
            this.testInputCheckbox(e.target);
          });
        }
      }
      if (element.nodeName.toUpperCase() === 'TEXTAREA') {
        element.addEventListener('input', e => {
          this.testInputText(e.target);
        });
      }
      if (element.nodeName.toUpperCase() === 'SELECT') {
        element.addEventListener('change', e => {
          this.testInputSelect(e.target);
        });
      }
    });

    this.bindSubmit();
  }

  showFieldValidation(input, inputIsValid) {
    // eslint-disable-next-line no-unused-expressions
    !inputIsValid
      ? input.parentElement.classList.add(form.classError)
      : input.parentElement.classList.remove(form.classError);
  }

  testInputText(input) {
    let inputIsValid = true;
    const pattern = input.getAttribute('pattern');

    if (pattern !== null) {
      const reg = new RegExp(pattern, 'gi');
      if (!reg.test(input.value)) {
        inputIsValid = false;
      }
    } else if (input.value === '') {
      inputIsValid = false;
    }

    if (inputIsValid) {
      this.showFieldValidation(input, true);
      return true;
    }
    this.showFieldValidation(input, false);
    return false;
  }

  testInputEmail(input) {
    const mailReg = new RegExp(
      '^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+.[a-zA-Z]{2,3}$',
      'gi'
    );

    if (!mailReg.test(input.value)) {
      this.showFieldValidation(input, false);
      return false;
    }
    this.showFieldValidation(input, true);
    return true;
  }

  testInputURL(input) {
    const urlReg = new RegExp('^https?://.+', 'i');
    if (!urlReg.test(input.value)) {
      this.showFieldValidation(input, false);
      return false;
    }
    this.showFieldValidation(input, true);
    return true;
  }

  testInputSelect(select) {
    if (
      select.options[select.selectedIndex].value === '' ||
      select.options[select.selectedIndex].value === '-1'
    ) {
      this.showFieldValidation(select, false);
      return false;
    }
    this.showFieldValidation(select, true);
    return true;
  }

  testInputCheckbox(input) {
    const name = input.getAttribute('name');
    const group = input.form.querySelectorAll(`input[name="${name}"]:checked`);

    if (group.length) {
      this.showFieldValidation(input, true);
      return true;
    }
    this.showFieldValidation(input, false);
    return false;
  }

  bindSubmit() {
    docQuerySelector(form.formName).addEventListener('submit', e => {
      e.preventDefault();

      let formIsValidated = true;
      const elements = docQuerySelector(form.formName).querySelectorAll(
        '[required]'
      );

      [...elements].forEach(element => {
        if (element.nodeName.toUpperCase() === 'INPUT') {
          const type = element.type.toUpperCase();

          if (type === 'EMAIL') {
            if (!this.testInputEmail(element)) {
              formIsValidated = false;
            }
          }
          if (type === 'URL') {
            if (!this.testInputURL(element)) {
              formIsValidated = false;
            }
          }
          if (type === 'TEXT') {
            if (!this.testInputText(element)) {
              formIsValidated = false;
            }
          }
          if (type === 'CHECKBOX') {
            if (!this.testInputCheckbox(element)) {
              formIsValidated = false;
            }
          }
          if (type === 'RADIO') {
            if (!this.testInputCheckbox(element)) {
              formIsValidated = false;
            }
          }
        }
        if (element.nodeName.toUpperCase() === 'TEXTAREA') {
          if (!this.testInputText(element)) {
            formIsValidated = false;
          }
        }
        if (element.nodeName.toUpperCase() === 'SELECT') {
          if (!this.testInputSelect(element)) {
            formIsValidated = false;
          }
        }
      });

      if (formIsValidated) {
        // console.log('send email');
        // e.target.submit();
        this.sendMail();
      } else {
        return false;
      }
      return false;
    });
  }

  sendMail() {
    const data = {
      'imie-i-nazwisko': docGetElementById('name').value,
      'twoj-email': docGetElementById('email').value,
      'data-wydarzenia': docGetElementById('date').value,
      'miejsce-wydarzenia': docGetElementById('place').value,
      'tresc-wiadomosci': docGetElementById('text').value,
    };

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    fetch('mail.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: config,
    })
      .then(() => {
        docQuerySelector(form.formName).remove();
        docQuerySelector(form.classItemForm).innerHTML = form.successSend;
      })
      .catch(() => {
        const text = document.createTextNode(form.errorSend);
        const child = docQuerySelector(form.formName);
        child.parentNode.insertBefore(text, child);
      });
  }
}

export default FormValidate;
