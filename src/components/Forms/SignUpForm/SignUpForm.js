import React from 'react';
import { FormDiv, FormTag } from './SignUpFormStyles';
import { useForm } from 'react-hook-form';

import PriceCTA from '../../CTAs/PriceCTA/PriceCTA';
import SuccessBtn from '../../Buttons/SuccessBtn/SuccessBtn';
import Input from '../../Forms/SignUpForm/Inputs/Inputs'


const SignUpForm = (() => {
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <FormDiv>
      <PriceCTA />
      <FormTag onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          register={register}
          name="firstName"
          type="text"
          placeholder="First Name"
          autoFocus
          errors={errors}
        />
        {errors.firstName && <p>First Name cannot be empty</p>}

        <Input
          name="lastName"
          type="text"
          placeholder="Last Name"
          register={register}
          errors

        />
        {errors.lastName && <p>Last Name cannot be empty</p>}

        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          register={register}
          errors

        />
        {errors.email && errors.email.type === 'required' && (<p>Email cannot be empty</p>)}
        {errors.email && errors.email.type === 'pattern' && (<p>Looks like this is not an email</p>)}

        <Input
          name="password"
          type="password"
          placeholder="Password"
          register={register}
          errors
        />

        <SuccessBtn />
        <p>
          By clicking the button, you are agreeing to our{' '}
          <a href="/">Terms and Services</a>
        </p>
      </FormTag>
    </FormDiv>
  );
});

export default SignUpForm;
