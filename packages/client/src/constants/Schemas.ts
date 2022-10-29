import * as Yup from 'yup'

const loginRules = /^(?=.*[A-Za-z])[0-9A-Za-z_-]{3,20}$/
const passwordRules = /^(?=.*[A-ZА-Я])(?=.*[0-9]).{10,}$/

export const loginSchema = Yup.object().shape({
  login: Yup.string().required('Required').matches(loginRules, {
    message:
      'Должно быть от 3 до 20 символов. Допускается латиница, цифры (но не состоять из цифр), дефис и нижнее подчёркивание',
  }),
  password: Yup.string().required('Required').matches(passwordRules, {
    message:
      'Пароль должен содержать от 8 до 40 символов. Обязательно хотя бы одна заглавная буква и цифра.',
  }),
})

export const regSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Required'),
  login: Yup.string().required('Required').matches(loginRules, {
    message:
      'Должно быть от 3 до 20 символов. Допускается латиница, цифры (но не состоять из цифр), дефис и нижнее подчёркивание',
  }),
  password: Yup.string().required('Required').matches(passwordRules, {
    message:
      'Пароль должен содержать от 8 до 40 символов. Обязательно хотя бы одна заглавная буква и цифра.',
  }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
})
