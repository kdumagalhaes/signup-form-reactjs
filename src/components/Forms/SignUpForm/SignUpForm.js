import React from 'react';
import { FormDiv, FormTag } from './SignUpFormStyles';
import { useForm } from 'react-hook-form';

import PriceCTA from '../../CTAs/PriceCTA/PriceCTA';
import SuccessBtn from '../../Buttons/SuccessBtn/SuccessBtn';

const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm();

  // eslint-disable-next-line
  const alertOutline = {
    backgroundColor: 'red',
  };

  return (
    <FormDiv>
      <PriceCTA />
      <FormTag onSubmit={handleSubmit()} noValidate>
        <input
          ref={register({ required: true })}
          name="firstName"
          type="text"
          placeholder="First Name"
          autoFocus
          errors
        />
        {errors.firstName && <span>First name is required</span>}

        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          ref={register({ required: true })}
          errors
        />
        {errors.lastName && <span>Last name is required</span>}

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          ref={register({
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            required: true,
          })}
          errors
          className
        />
        {errors.email && <span>Looks like this is not an email</span>}

        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
          errors
        />
        {errors.password && <span>Password is required</span>}

        <SuccessBtn />
        <p>
          By clicking the button, you are agreeing to our{' '}
          <a href="/">Terms and Services</a>
        </p>
      </FormTag>
    </FormDiv>
  );
};

export default SignUpForm;
