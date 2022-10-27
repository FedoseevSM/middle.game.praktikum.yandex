import React from 'react';
import cn from 'classnames';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';
import styles from './LoginPage.module.scss';
  // 
const LoginPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <div className={styles.form_root}>
          <Form
            actions={[
                        <div className={styles.form_buttons}>
                          <div className={styles.form_button_box}>
                            <Button className={styles.form_button}> 
                              <h1 className={styles.login_button_title}>{'Sign in'}</h1>
                            </Button>
                          
                          </div>

                          <a href="signup" className={styles.form_sign_in_link}>{'No acc? Sign up'}</a>
                        </div>
            ]}
          >
            <div className={styles.form_inputs}>
              <h4 className={styles.form_login_input_title}>{'Login'}</h4>
              <Input
              className={cn(styles.form_login_input, styles.form_input)}       
              required/>
              <h4  className={styles.form_pass_input_title}>{'Password'}</h4>
              <Input type='password'
              className={cn(styles.form_pass_input, styles.form_input)}   
              required/>
              <a href="resetpassword" className={styles.form_pass_reset_link}>{'forgot your password?'}</a>
            </div>
          </Form>    
          <h1 className={styles.form_logo_title}>
            {'Huggy Wuggy'}
            <br />
            {'& Kissy Missy'}
          </h1>
        </div>
      </div>
    </div>  
  );
}


export default LoginPage;