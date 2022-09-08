import React from 'react';
// import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import styles from './form.module.scss';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

// const EmailSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address format').required('Email is required')
// });

const SubscribeForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: '' }}
        //   validationSchema={EmailSchema}
      >
        {(formik) => (
          <Form>
            <div className={styles.form_group}>
              <Input
                label="Email"
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formik.values.email}
                onChange={() => {}}
              />
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <Button type="submit" theme="primary">
          <a> Subscribe</a>
        </Button>
      </div>
    </div>
  );
};
export default SubscribeForm;
