import React from 'react';
// import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import Styles from './form.module.scss';
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
        <Form>
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email address"
              className={Styles.input}
            />
          </div>
        </Form>
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
