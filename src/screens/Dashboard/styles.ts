
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`
export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`
// export const LogoutButton = styled(BorderlessButton)`
// `
export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  border-radius: 10px;
  height: ${RFValue(48)}px;
`
export const User = styled.View`
  margin-left: 17px;
`
export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`
export const UserName = styled(UserGreeting)`
  font-family: ${({ theme }) => theme.fonts.bold};
`
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`
export const HighLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 16px;
`

// export const TransacionList = styled(FlatList as new () => FlatList<DataListProps>).attrs({
//   showsVerticalScrollIndicator: false,
//   contentContainerStyle: { paddingBottom: getBottomSpace() }
// })`
  
// `
export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center
`