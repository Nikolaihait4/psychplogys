// AuthForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signUp, signIn } from '../../services/auth';

const AuthForm = ({ onLogin }) => {
  return (
    <div>
      <h2>Authorization</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // Вызываем функцию для входа пользователя
          signIn(values.email, values.password)
            .then(() => {
              // Если вход успешен, вызываем callback-функцию
              onLogin();
            })
            .catch(error => {
              console.error('Login error:', error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;
