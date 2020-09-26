import React from 'react';
import { FormDiv, FormTag } from './SignUpFormStyles';

import PriceCTA from '../../CTAs/PriceCTA/PriceCTA';

const SignUpForm = () => {
  return (
    <FormDiv>
      <PriceCTA />
      <FormTag>
        <input type="text" placeholder="First Name" autoFocus/>
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </FormTag>
    </FormDiv>
  );
};

export default SignUpForm;
