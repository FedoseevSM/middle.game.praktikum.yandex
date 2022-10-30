import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Form from '../../components/Form'
import styles from './LoginPage.module.scss'
import stylesForm from '../../components/Form/Form.module.scss'

import { loginSchema } from '../../constants/Schemas'

const LoginPage: React.FC = (): JSX.Element => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        login: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit: values => {
        console.log('values', values)
      },
    })

  return (
    <div className={stylesForm.form_root}>
      <h1 className={stylesForm.form_logo_title}>
        Huggy Wuggy
        <br />& Kissy Missy
      </h1>
      <Form
        onSubmit={handleSubmit}
        actions={[
          <div key={0}>
            <div className={stylesForm.form_button_box}>
              <Button className="button_for_form" type="submit">
                <h1 className={styles.login_button_title}>Sign in</h1>
              </Button>
            </div>

            <Link to="/reg" className={stylesForm.form_sign_in_link}>
              No acc? Sign up
            </Link>
          </div>,
        ]}>
        <div>
          <h4 className={stylesForm.form_title}>Login</h4>

          <Input
            name="login"
            value={values.login}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input_form"
            showError={!!errors.login && !!touched.login}
            error={errors.login}
          />
          <h4 className={stylesForm.form_title}>Password</h4>

          <Input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input_form"
            showError={!!errors.password && !!touched.password}
            error={errors.password}
          />

          <a href="resetpassword" className={stylesForm.form_pass_reset_link}>
            forgot your password?
          </a>
        </div>
      </Form>
    </div>
  )
}

export default LoginPage
