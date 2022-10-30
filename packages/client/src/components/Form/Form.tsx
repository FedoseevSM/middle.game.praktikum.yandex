import React from 'react'
import styles from './Form.module.scss'
import { Props } from './types'

export const Form: React.FC<Props> = ({
  children,
  actions,
  onSubmit,
}: Props): JSX.Element => (
  <form onSubmit={onSubmit}>
    <div className={styles.form_main_block}>
      <div className={styles.form_group}>
        <div className={styles.form_inputs_buttons}>
          <div className={styles.form_inputs}>{children}</div>
          <div className={styles.form_buttons}>{actions}</div>
        </div>
      </div>
    </div>
  </form>
)
