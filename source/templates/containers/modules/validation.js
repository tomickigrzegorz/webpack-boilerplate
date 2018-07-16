class Validation {
  constructor(options) {
    this.options = options;
  }

  rules() {

    Object.keys(this.options.rules).map(elements => {

      let valueLength = document.getElementById(elements).value.length;

      let op = {
        element: elements,
        required: this.options.rules[elements]['required'],
        minLenMes: this.options.messages[elements]['minlength'],
        minLenVar: this.options.rules[elements]['minlength'],
        maxLenMes: this.options.messages[elements]['maxlength'],
        maxLenVar: this.options.rules[elements]['maxlength']
      }

      this.getLengthVal(op);

    });

  }

  getLengthVal(op) {
    let valElement = document.getElementById(op.element);
    return valElement.value = valElement.value.trim();
    // let lengthValue = document.getElementById(op.element).value;
    // return lengthValue = lengthValue.trim().length;
  }

  onkeyup(op) {
    ["keyup", "onkeypress"].forEach(event => {
      document.getElementById(op.element).addEventListener(event, e => {
        let valueLength = e.target.value.trim().length;
        this.element(op, valueLength);
      }, false);
    });
  }

  element(op, valueLength) {

    let errorId = document.getElementById(`${op.element}-error`);
    // console.log(`${op.element}, ${op.minLenMes}, ${op.minLenVar}, ${op.maxLenMes}, ${op.maxLenVar}, ${valueLength}`)
    console.log(`${valueLength}, ${op.minLenVar}, ${op.maxLenVar}`)



    if (errorId) {
      if (valueLength > op.minLenVar && valueLength < op.maxLenVar) {
        this.removeElement(op.element);
      }
    }

    if (!errorId) {

      if (valueLength < op.minLenVar) {
        this.addElement(op.element, op.minLenMes);
      }
      if (valueLength > op.maxLenVar) {
        this.addElement(op.element, op.maxLenMes);
      }
    }

  }

  removeElement(element) {
    let elementRemove = document.getElementById(`${element}-error`);
    elementRemove.parentNode.removeChild(elementRemove);
    document.getElementById(element).classList.remove('error');
  }

  addElement(elements, message) {
    let element = document.getElementById(elements);
    let newElement = document.createElement('div');
    newElement.setAttribute('id', `${elements}-error`);
    newElement.setAttribute('class', 'error-label');
    newElement.textContent = message;
  
    element.parentNode.insertBefore(newElement, element.nextSibling);
    element.classList.add('error');
  }

  limitText(op) {
    let element = document.getElementById(op.element).value;
    if (element.length > op.maxLenVar) {
      element = element.substring(0, op.maxLenVar);
    }
  }

  emailValidate(email) {
    let mail = document.getElementById(email).value;
    let emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailPattern.test(mail); 
  }

  onButtonSubmit(op) {
    let input = document.getElementById(op.element).value;
    console.log(`${op.element} ${input.length}`);
  }

}

const options = {
  'rules': {
    'name': {
      'required': true,
      'minlength': 5,
      'maxlength': 20
    },
    'email': {
      'required': true,
      'minlength': 3,
      'maxlength': 100
    },
    'date': {
      'required': true
    },
    'place': {
      'required': true,
      'minlength': 5,
      'maxlength': 50
    }
  },
  'messages': {
    'name': {
      'required': "Podaj imię i nazwisko",
      'minlength': "Pole musi zawierać więcej niż 5 znaków",
      'maxlength': "Pole nie może zawierać więcej niż 20 znaków"
    },
    'email': {
      'required': "Podaj e-mail",
      'minlength': "Pole musi zawierać więcej niż 2 znaki",
      'maxlength': "Pole nie może zawierać więcej niż 100 znaków"
    },
    'date': {
      'required': "Podaj datę ślubu"
    },
    'place': {
      'required': 'Podaj miejscowość',
      'minlength': "Pole musi zawierać więcej niż 5 znaków",
      'maxlength': "Pole nie może zawierać więcej niż 50 znaków"
    }
  }
}

let validation = document.querySelector('.validation');
validation.addEventListener('submit', e => {
  e.preventDefault();
  const run = new Validation(options);
  run.rules();
});