import React from 'react'
import { Container, FormLabel,Form,Form1, FormButton, FormContent, FormInput, FormWrap, Icon , Text} from './signinElement'

const SignIn = () => {
  return (
    <div>
       <Container>
        <FormWrap>
         <Icon to='/'>The health app</Icon>
         <FormContent>
          <Form action='#'>
           <Form1>Sign in to your account</Form1>
           <FormLabel htmlFor='for'>Email</FormLabel>
           <FormInput type='email' required />
           <FormLabel htmlFor='for'>Password</FormLabel>
           <FormInput type='password' required />
           <FormButton type='submit'>Continue</FormButton>
           <Text>Forgot Password</Text>
          </Form>
         </FormContent>
        </FormWrap>
       </Container>
    </div>
  )
}

export default SignIn
