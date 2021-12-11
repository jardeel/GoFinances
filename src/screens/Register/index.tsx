import React from 'react';

import {Input}  from '../../components/Forms/Input';

import { 
  Container,
  Header,
  Title,
  Form
} from './styles';

export function Register(){
  return(
    <Container>
      <Header>  
        <Title>Cadastro1</Title>  
      </Header>

      <Form>
        <Input
          placeholder="Nome" 
        />

        <Input
          placeholder="Preço"
        />
      </Form>
    </Container>
  )
}