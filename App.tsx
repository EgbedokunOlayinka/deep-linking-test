import React from 'react';
import AppNavigationContainer from './src/navigation/AppNavigationContainer';
import DetailProvider from './src/providers/DetailProvider/DetailProvider';

const App = () => {
  return (
    <DetailProvider>
      <AppNavigationContainer />
    </DetailProvider>
  );
};

export default App;
