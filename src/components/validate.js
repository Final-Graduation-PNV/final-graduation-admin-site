import isEmail from 'validator/lib/isEmail';
import isEmpty from "validator/lib/isEmpty";
const ValidateAll = () => {
  const messenger = {};
  if (isEmpty(name)) {
    messenger.name = "Please input your name!"
  }
  if (isEmpty(email)) {
    messenger.email = "Please input your Email!"
  } else if (!isEmail(email)) {
    messenger.email = "Invalid email!"
  }
  if (isEmpty(password)) {
    messenger.password = "Please input your password!!"
  }
  if (isEmpty(confirmPassword)) {
    messenger.confirmPassword = "Please input your password!!"
  }
  if (password != confirmPassword) {
    messenger.confirmPassword = "Please enter your confirm password."
  }
  setValidatorMsg(messenger);
  if (Object.keys(messenger).length > 0) return false
  return true
}
export default ValidateAll