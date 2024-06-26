// SignIn.jsx
import React from 'react';
import auth from 'services/firebase';
import AuthDetails from './AuthDetails';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { signInWithEmailAndPassword } from 'firebase/auth';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const SignIn = ({ onClose }) => {
  const handleSignIn = (values, { setSubmitting, setFieldError }) => {
    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('User signed in:', user);
        setSubmitting(false);
        onClose(); // Закрываем модальное окно после успешного входа
      })
      .catch(error => {
        console.error('Sign in error:', error.message);
        setSubmitting(false);
        setFieldError('general', error.message);
      });
  };

  return (
    <div>
      <h2>Log In</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInSchema}
        onSubmit={handleSignIn}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Sign In
            </button>
            <ErrorMessage name="general" component="div" />
          </Form>
        )}
      </Formik>
      <AuthDetails />
    </div>
  );
};

export default SignIn;
