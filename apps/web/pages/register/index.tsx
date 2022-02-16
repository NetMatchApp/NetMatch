import './index.module.css';
import axios from 'axios';
import React from 'react';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, TextInput, Center, Alert } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { Checkbox, Container, Textarea } from '@nextui-org/react';
import { v4 as uuid } from 'uuid'

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

    const id = uuid();
    const name = event.target.userName.value;
    const mail = event.target.mail.value;
    const password = event.target.password.value;

    console.log('http://localhost:3333/user/' + id);

    try {
      const response = await axios.post('http://localhost:3333/user/' + id, {
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
              <Button type='submit' color="gradient" size={"md"}> register </Button>
            </form>
              <div> <Text color='red'>{this.state.alert}</Text> </div>
          </Card>
        </Container>

      );
  }
}



export default Register;
