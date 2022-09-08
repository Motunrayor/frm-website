import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../common/Input/Input';
import { Button } from '../common';
import styles from './form.module.scss';

const MinistryForm = () => {
  return (
    <div>
      <Formik initialValues={{ fullname: '', email: '', phone_number: '' }}>
        {(formik) => (
          <Form>
            <div className={styles.inputWrapper}>
              <div className={styles.form_group}>
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter Full Name"
                  name="full_name"
                  value={formik.values.fullname}
                  onChange={() => {}}
                />
              </div>
              <div className={styles.form_group}>
                <Input
                  label="Phone Number (WhatsApp number preferrably)"
                  type="number"
                  placeholder="Enter phone number"
                  name="phone_number"
                  value={formik.values.phone_number}
                  onChange={() => {}}
                />
              </div>
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
              <Button theme="secondary">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MinistryForm;
