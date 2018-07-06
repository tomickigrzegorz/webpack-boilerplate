import addContactInfo from '../modules/addContactInfo';

import "../modules/shareButton";
import './contact.scss';


addContactInfo();




// module.exports = {
 
//     forms: [],
//     form_elements: [
//       'username',
//       'email',
//       'password'
//     ],
//     form_element_rules: [
//       {'required': true, 'minLength': 5},
//       {'required': true, 'email': true},
//       {'required': true, 'minLength': 5}
//     ],
//     messages: [
//       'A 5 character username must be provided',
//       'Please provide a valid email',
//       'A 6 character password must be provided'
//     ],
   
//     /**
//      * Peforms Validation
//      */
//     perform_form_validation: function(e) {
   
//       e.preventDefault();
   
//       var submission_flag = true;
//       for (var i = 0; i < module.exports.form_elements.length; i++) {
//         var form_element = document.getElementById(module.exports.form_elements[i]);
//         if (form_element) {
//           var rules = module.exports.form_element_rules[i],
//           type = form_element.type;
   
//           // Required validation option
//           if (rules.required) {
//             // nothing should be less than four character
//             if (type == 'checkbox' && !form_element.checked) {
//               // display error about terms and conditions
//               module.exports.set_form_element_label_with_message(module.exports.form_elements[i], module.exports.messages[i]);
//               submission_flag = false;
//             } 
   
//             if (type == 'checkbox' && form_element.checked ) {
//               module.exports.set_form_element_label_with_message(module.exports.form_elements[i], '');
//             }
   
//             if (type != 'checkbox' && form_element.value.length < 1) {
//               // display error about being required
//               module.exports.set_form_element_label_with_message(module.exports.form_elements[i], module.exports.messages[i]);
//               submission_flag = false;
//             } 
   
//             if (type != 'checkbox' && form_element.value.length > 0) {
//                module.exports.set_form_element_label_with_message(module.exports.form_elements[i], '');
//             }
   
//           }
   
//           // Minimum length validation option
//           if (rules.minLength) {
   
//             if (form_element.value.length < (rules.minLength + 1)) {
//               module.exports.set_form_element_label_with_message(module.exports.form_elements[i], module.exports.messages[i]);
//               submission_flag = false;
//             }
   
//             if (form_element.value.length >= (rules.minLength + 1)) {
//               module.exports.set_form_element_label_with_message(module.exports.form_elements[i], '');
//             }
//           }
   
//           // Email validation option
//           if (rules.email) {
//             var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             if (!re.test(form_element.value)) {
//               module.exports.set_form_element_label_with_message(module.exports.form_elements[i], module.exports.messages[i]);
//               submission_flag = false;
//             }
   
//             if (re.test(form_element.value)) {
//               module.exports.set_form_element_label_with_message(module.exports.form_elements[i], '');
//             }
//           }
//         }
//       }
   
//       if (submission_flag) {
//         module.exports.forms[0].submit();
//       }
//     },
//     /**
//      * Sets the error label
//      */
//     set_form_element_label_with_message: function(element, message) {
//       var requesting_element = document.getElementById(element + '-error');
//       requesting_element.innerHTML = message;
//     }
//   };


console.log('contact');