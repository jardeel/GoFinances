import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardPros } from '../../components/TransactionCard';

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
  Title,
  TransactionList
} from './styles';
 
export interface DataListProps extends TransactionCardPros {
  id: string;
}

export function Dashboard(){
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransactions(){
    const dataKey = '@gofinances:trasactions';
    const response = await AsyncStorage.getItem(dataKey);
    const trasactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = trasactions
      .map((item: DataListProps) => {

        const amount = Number(item.amount)
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          });

          const date = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
          }).format(new Date(item.date));

          return { 
            id: item.id,
            name: item.name,
            amount,
            type: item.type,
            category: item.category,
            date,
          }
      });
      
      setData(transactionsFormatted);
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

        <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>  <TransactionCard data={item} />}
        />

      </Transactions>
    </Container>
  )
}
