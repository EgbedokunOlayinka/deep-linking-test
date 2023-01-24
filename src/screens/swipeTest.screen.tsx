import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Animated, Pressable, Text, View} from 'react-native';
import {AppTabType, TabIndexType} from '../types';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';

const SwipeTestScreen = () => {
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <Pressable style={{width: 100, backgroundColor: 'red'}}>
        <Text>Check</Text>
      </Pressable>
    );
  };

  return (
    <View style={{padding: 24}}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={{padding: 24, backgroundColor: 'white'}}>
          <Text>One</Text>
        </View>
      </Swipeable>
    </View>
  );
};

export default SwipeTestScreen;
