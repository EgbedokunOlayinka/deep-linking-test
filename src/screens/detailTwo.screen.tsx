import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {AppTabType, TabIndexType} from '../types';

type Props = React.FC<{
  navigation: MaterialTopTabNavigationProp<AppTabType, 'DetailTwo'>;
  // changeTabState: (val: TabIndexType) => void;
}>;

const DetailTwoScreen: Props = () => {
  // const isFocused = useIsFocused();

  // useEffect(() => {
  //   if (isFocused) {
  //     changeTabState('DetailTwo');
  //   }
  // }, [isFocused, changeTabState]);

  return (
    <View>
      <Text>Two</Text>
    </View>
  );
};

export default DetailTwoScreen;
