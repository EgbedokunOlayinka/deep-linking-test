import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigationContainer from './src/navigation/AppNavigationContainer';
import DetailProvider from './src/providers/DetailProvider/DetailProvider';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <DetailProvider>
        <AppNavigationContainer />
      </DetailProvider>
    </GestureHandlerRootView>
  );
};

export default App;
