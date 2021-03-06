import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { IProvider } from './interfaces';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;

  background: #28262e;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  line-height: 28px;
  font-family: 'RobotoSlab-Regular';

  color: #f4ede8;
`;

export const UserName = styled.Text`
  font-family: 'RobotoSlab-Medium';

  color: #ff9000;
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<IProvider>)`
  padding: 32px 24px 16px;
`;

export const ProvidersListTitle = styled.Text`
  margin-bottom: 24px;

  font-size: 24px;
  font-family: 'RobotoSlab-Medium';

  color: #f4ede8;
`;

export const ProviderContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  padding: 20px;
  margin-bottom: 16px;

  border-radius: 10px;

  background: #3e3b47;
`;

export const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';

  color: #f4ede8;
`;

export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 8px;
`;

export const ProviderMetaText = styled.Text`
  margin-left: 8px;

  font-family: 'RobotoSlab-Regular';

  color: #999591;
`;
