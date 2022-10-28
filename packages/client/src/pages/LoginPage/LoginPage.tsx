import React from 'react'
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

  console.log('errors', errors)

  return (
    <div className={styles.form_root}>
      <h1 className={styles.form_logo_title}>
        {'Huggy Wuggy'}
        <br />
        {'& Kissy Missy'}
      </h1>
      <Form
        onSubmit={handleSubmit}
        actions={[
          <div className={styles.form_buttons} key={0}>
            <div className={styles.form_button_box}>
              <Button className={styles.form_button} type="submit">
                <h1 className={styles.login_button_title}>{'Sign in'}</h1>
              </Button>
            </div>

            <a href="signup" className={styles.form_sign_in_link}>
              {'No acc? Sign up'}
            </a>
          </div>,
        ]}>
        <div className={styles.form_inputs}>
          <h4 className={styles.form_login_input_title}>{'Login'}</h4>

          <Input
            name="login"
            value={values.login}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(styles.form_login_input)}
            showError={!!errors.login && !!touched.login}
            error={errors.login}
          />
          <h4 className={styles.form_pass_input_title}>{'Password'}</h4>

          <Input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(styles.form_pass_input)}
            showError={!!errors.password && !!touched.password}
            error={errors.password}
          />

          <a href="resetpassword" className={styles.form_pass_reset_link}>
            {'forgot your password?'}
          </a>
        </div>
      </Form>
    </div>
  )
  // =======
  //     <div>
  //       <h1 className={styles.form_logo_title}>
  //         {'Huggy Wuggy'}
  //         <br />
  //         {'& Kissy Missy'}
  //       </h1>
  //       <Form
  //         actions={[
  //           <div className={styles.form_buttons}>
  //             <div className={styles.form_button_box}>
  //               <Button>
  //                 Sign in
  //               </Button>
  //             </div>
  //             <a href="signup" className={styles.form_sign_in_link}>{'No acc? Sign up'}</a>
  //           </div>
  //         ]}
  //       >
  //         <div className={styles.form_inputs}>
  //           <h4 className={styles.form_login_input_title}>{'Login'}</h4>
  //           <Input
  //             className={cn(styles.form_login_input, styles.form_input)}
  //             required />
  //           <h4 className={styles.form_pass_input_title}>{'Password'}</h4>
  //           <Input type='password'
  //             className={cn(styles.form_pass_input, styles.form_input)}
  //             required />
  //           <a href="resetpassword" className={styles.form_pass_reset_link}>{'forgot your password?'}</a>
  //         </div>
  //       </Form>
  //     </div>
  //   );
  // >>>>>>> 490aa13ac218b4b9a5ef510f6cb937bfe51f4d39
}

export default LoginPage
