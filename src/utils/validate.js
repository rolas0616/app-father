const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$/;

const validate = (schema) => {
  let errors = {};
  for(let item of schema) {
    switch (item.type) {
      case 'required':
        if(!item.value) {
          errors[item.name] = 'This field is required';
        }
        break;
      case 'email':
        if(!item.value.match(emailRegex)){
          errors[item.name] = 'Invalid email format';
        }
        break;
      case 'password':
        if(!item.value.match(passwordRegex)){
          errors[item.name] = 'The password must contain at least 8 characters, at least one capital letter and at least one special character';
        }
        break;
      default:
        if(!item.value) {
          errors[item.name] = 'This field is required';
        }
        break;
    }
  }
  return {
    pass: Object.entries(errors).length > 0 ? false : true,
    errors,
  }
}

export default validate;
