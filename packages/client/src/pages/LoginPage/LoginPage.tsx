import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { useFormik } from 'formik'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Form from '../../components/Form'
import styles from './LoginPage.module.scss'

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
    <div className={styles.form_root}>
      <h1 className={styles.form_logo_title}>
        Huggy Wuggy
        <br />& Kissy Missy
      </h1>
      <Form
        onSubmit={handleSubmit}
        actions={[
          <div key={0}>
            <div className={styles.form_button_box}>
              <Button className={styles.form_button} type="submit">
                <h1 className={styles.login_button_title}>Sign in</h1>
              </Button>
            </div>

            <Link to="/reg" className={styles.form_sign_in_link}>
              No acc? Sign up
            </Link>
          </div>,
        ]}>
        <div>
          <h4 className={styles.form_title}>Login</h4>

          <Input
            name="login"
            value={values.login}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(styles.form_input)}
            showError={!!errors.login && !!touched.login}
            error={errors.login}
          />
          <h4 className={styles.form_title}>Password</h4>

          <Input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(styles.form_input, styles.form_input_mb0)}
            showError={!!errors.password && !!touched.password}
            error={errors.password}
          />

          <a href="resetpassword" className={styles.form_pass_reset_link}>
            forgot your password?
          </a>
        </div>
      </Form>
    </div>
  )
}

export default LoginPage
