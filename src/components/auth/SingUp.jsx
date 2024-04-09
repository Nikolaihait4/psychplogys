// SignUp.jsx
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import auth from 'services/firebase';
import AuthDetails from './AuthDetails';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const SignUp = () => {
  const handleSignUp = (values, { setSubmitting, setFieldError }) => {
    const { email, password } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Успешная регистрация
        const user = userCredential.user;
        console.log('User signed up:', user);
        // Очистка полей формы
        setSubmitting(false);
      })
      .catch(error => {
        // Обработка ошибок при регистрации
        console.error('Sign up error:', error.message);
        setSubmitting(false);
        setFieldError('general', error.message);
      });
  };

  return (
    <div>
      <h2>Registration</h2>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={SignUpSchema}
        onSubmit={handleSignUp}
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
            <div>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
            <ErrorMessage name="general" component="div" />
          </Form>
        )}
      </Formik>
      <AuthDetails />
    </div>
  );
};

export default SignUp;
