import './index.module.css';

import { Card, Textarea, Button, Container, Col, Text } from '@nextui-org/react'
import axios from 'axios';
import React from 'react';


/* eslint-disable-next-line */
export interface RegisterProps {}


type myState = { alert: string};
type myProps = unknown;

export class Register extends React.Component<myProps, myState>{

  constructor(props: RegisterProps){
    super(props);
    this.state = { alert: "" };
    this.registerUser.bind(this)
  }


  registerUser = async (event) => {
    event.preventDefault()

    const name = event.target.userName.value;
    const mail = event.target.mail.value;
    const password = event.target.password.value;

    try {
      
      const response = await axios.post('http://localhost:3333/api/user/registerUser', {
        mail: mail,
        name: name,
        password: password
      })

      if(response.data == "user was registered"){
        window.location.replace('/home')
      }

      this.setState({ alert: response.data})
      
    } catch (error) {
      console.log(error)
    }
  }


  render() {
      return (
        
        <Container>
          <Card>

            <form onSubmit={this.registerUser}>
              <Textarea label='user name'  id='userName' underlined size='xs' required color='secondary'></Textarea>
              <Textarea label='mail' id='mail' underlined size='xs' required color='secondary'></Textarea>
              <Textarea label='password' id='password' underlined size='xs' required color='secondary'></Textarea>
              <Button type='submit' rounded bordered color="gradient" size={"md"}> register </Button>
            </form>
              <div> <Text color='red'>{this.state.alert}</Text> </div>
            
          </Card>
      </Container>

      );
  }
}

export default Register;
