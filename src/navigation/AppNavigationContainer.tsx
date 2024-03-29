import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import OptionBtn from '../components/OptionBtn';
import {useDetail} from '../providers/DetailProvider/DetailContext';
import DetailsTabNav from '../screens/details.tab';
import HomeScreen from '../screens/home.screen';
import OnboardingScreen from '../screens/onboarding.screen';
import OnboardingThreeScreen from '../screens/onboardingThree.screen';
import OnboardingTwoScreen from '../screens/onboardingTwo.screen';
import SwipeTestScreen from '../screens/swipeTest.screen';
import {AppStackType, TabIndexType} from '../types';

const linking = {
  prefixes: ['test://'],
  config: {
    screens: {
      Details: '/details/:event/:tabIndex',
    },
  },
};

const tabs: TabIndexType[] = ['DetailOne', 'DetailTwo', 'DetailThree'];

const Stack = createNativeStackNavigator<AppStackType>();

const AppNavigationContainer = () => {
  const navigationRef = createNavigationContainerRef<AppStackType>();

  const {changeCurrentTab} = useDetail();

  const handleStateChange = useCallback(() => {
    const currentRoute = navigationRef.getCurrentRoute()?.name;
    if (tabs.find(val => val === currentRoute)) {
      changeCurrentTab(currentRoute as TabIndexType);
    }
    console.log(navigationRef.getCurrentRoute());
  }, [navigationRef, changeCurrentTab]);

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onStateChange={handleStateChange}>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        initialRouteName={'SwipeTest'}>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnboardingTwo"
          component={OnboardingTwoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnboardingThree"
          component={OnboardingThreeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SwipeTest" component={SwipeTestScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsTabNav}
          options={{
            headerRight: () => <OptionBtn />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
