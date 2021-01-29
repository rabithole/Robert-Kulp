import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';

// import '../css/LoginForm.css';
import styles from '../css/LoginForm.module.css';

import { withFormik, Form, Field } from 'formik';

function SignUp({ values, errors, touched }) {
  console.log('signup')
  return (
    <div>
      <p id={styles.signup}>Choose a username and password</p>
      
      <Form className={styles.formBody}>

        <h1>Sign Up</h1>
        
        <Field
          className={styles.input}
          type='text'
          name='username'
          placeholder='UserName'
        />
        {touched.username && errors.username && (
          <p className={styles.errors}>{errors.username}</p>
        )}
        <Field
          className={styles.input}
          type='password'
          name='password'
          placeholder='Password'
        />
        {touched.password && errors.password && (
          <p className={styles.errors}>{errors.password}</p>
        )}
        <button className={styles.button} type='submit' disabled={values.isSubmitting}>
          {values.isSubmitting ? 'SigningUp' : 'Submit'}
        </button>
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: props => ({
    username: '',
    password: ''
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('UserName is Required!'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Password is Required')
  }),
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    axios
      .post('https://guided-trips-backend.herokuapp.com/api/auth/register', values)
      .then(response => {
        console.log('Data', response);
      })
      .catch(err => console.log(err.response));

    setTimeout(() => {
      console.log('Entered Value', values);
      setSubmitting(false);
    }, 1000);
    resetForm();
  }
})(SignUp);
