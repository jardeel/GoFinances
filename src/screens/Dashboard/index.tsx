import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User, 
  UserGreeting,
  UserName,
  Icon, 
  HighLightCards,
  Transactions,
  Title
} from './styles';


export function Dashboard(){
  const data = {
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "13/04/2020"
  }


  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: "https://avatars.githubusercontent.com/u/42548982?v=4"}}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Jardel</UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.250,00"
          lastTransaction="última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.150,00"
          lastTransaction="01 á 16 de abril"
        />
      </HighLightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionCard data={data} />
      </Transactions>
    </Container>
  )
}