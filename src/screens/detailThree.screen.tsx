import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {AppTabType, TabIndexType} from '../types';

type Props = React.FC<{
  navigation: MaterialTopTabNavigationProp<AppTabType, 'DetailThree'>;
  // changeTabState: (val: TabIndexType) => void;
}>;

const DetailThreeScreen: Props = () => {
  // const isFocused = useIsFocused();

  // useEffect(() => {
  //   if (isFocused) {
  //     changeTabState('DetailThree');
  //   }
  // }, [isFocused, changeTabState]);

  return (
    <View>
      <Text>Three</Text>
    </View>
  );
};

export default DetailThreeScreen;
