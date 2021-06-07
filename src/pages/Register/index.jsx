import React from 'react';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Toogle from '../../components/Toogle';
import AuthHeader from '../../components/AuthHeader';
import Copyright from '../../components/Copyright';

import { Container } from './styles';


function Register() {
  return(
    <Container>
      <AuthHeader headerContent="Register"/>

        <form>
          <Input type="text" name="Name" placeholder="Name" srLabel="Name Input"/>
          <Input type="email" name="Email" placeholder="Email" srLabel="Email Input"/>
          <Input type="password" name="Password" placeholder="Password" srLabel="Password Input" />
          <Input type="password" name="Confirm Password" placeholder="Confirm Password" srLabel="Confirm Password Input" />


          <Toogle>
              I accept the&nbsp;
              <a href="http://google.com">Terms of Use</a> &amp;&nbsp;
              <a href="http://google.com">Privacy Police</a>
          </Toogle>

          <SubmitButton href="http://google.com" content="Register"/>

        
        </form>

        <Copyright />
        
    </Container>
  );
}

export default Register;