import React from 'react';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Toogle from '../../components/Toogle';
import AuthHeader from '../../components/AuthHeader';
import Copyright from '../../components/Copyright';

import { Container } from './styles';


function Login() {
  return(
    <Container>
      <AuthHeader headerContent="Welcome Back"/>

        <form>
          
          <Input type="email" name="Email" placeholder="email" srLabel="Email Input"/>

          <Input type="password" name="Password" placeholder="password" srLabel="Password Input" />

          <Toogle>Keep me Logged in</Toogle>

          <SubmitButton href="http://google.com" content="Sign in"/>

        
        </form>

        <Copyright />
        
    </Container>
  );
}

export default Login;