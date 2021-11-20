import React from 'react';
import { SafeAreaView } from 'react-native';
import HighlightCard from '../../components/HighlightCard';

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
  HighlightCards
} from './styles';

const Dashboard: React.FC = () => {
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: "https://avatars.githubusercontent.com/u/42548982?v=4"}}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Jardel</UserName>
            </User>
          </UserInfo>  
 
          <Icon name="power"/>
        </UserWrapper> 
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="ùltima entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.250,00"
          lastTransaction="ùltima saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.150,00"
          lastTransaction="01 á 16 de abril"
        />
      </HighlightCards>
    </Container>
  )
}

export default Dashboard;