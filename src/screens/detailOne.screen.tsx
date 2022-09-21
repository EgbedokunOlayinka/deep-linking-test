import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {AppTabType, TabIndexType} from '../types';

type Props = React.FC<{
  navigation: MaterialTopTabNavigationProp<AppTabType, 'DetailOne'>;
  // changeTabState: (val: TabIndexType) => void;
}>;

const DetailOneScreen: Props = () => {
  // const isFocused = useIsFocused();

  // useEffect(() => {
  //   if (isFocused) {
  //     changeTabState('DetailOne');
  //   }
  // }, [isFocused, changeTabState]);

  return (
    <View>
      <Text>One</Text>
    </View>
  );
};

export default DetailOneScreen;
