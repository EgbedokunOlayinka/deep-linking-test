import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const FullPageSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullPageSpinner;
