import * as Yup from 'yup'

const loginRules = /^(?=.*[A-Za-z])[0-9A-Za-z_-]{3,20}$/
const passwordRules = /^(?=.*[A-ZА-Я])(?=.*[0-9]).{10,}$/

export const loginSchema = Yup.object().shape({
  login: Yup.string().required('Required').matches(loginRules, {
    message:
      'Must be from 3 to 20 characters. Latin letters, digits (but not consisting of digits), hyphens and underscores are allowed',
  }),
  password: Yup.string().required('Required').matches(passwordRules, {
    message:
      'Must be from 8 to 40 characters. At least one capital letter and a number are required.',
  }),
})

export const regSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Required'),
  login: Yup.string().required('Required').matches(loginRules, {
    message:
      'Must be from 3 to 20 characters. Latin letters, digits (but not consisting of digits), hyphens and underscores are allowed',
  }),
  password: Yup.string().required('Required').matches(passwordRules, {
    message:
      'Must be from 8 to 40 characters. At least one capital letter and a number are required.',
  }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
})
