import React from 'react';
import { FormDiv, FormTag } from './SignUpFormStyles';
import { Formik } from 'formik';

import PriceCTA from '../../CTAs/PriceCTA/PriceCTA';
import SuccessBtn from '../../Buttons/SuccessBtn/SuccessBtn';

const SignUpForm = () => {
  return (
    <FormDiv>
      <PriceCTA />
      <FormTag>
        <input type="text" placeholder="First Name" autoFocus />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <SuccessBtn />
        <span>
          By clicking the button, you are agreeing to our{' '}
          <a href="/">Terms and Services</a>
        </span>
      </FormTag>
    </FormDiv>
  );
};

export default SignUpForm;
