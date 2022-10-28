import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppStackType, TabIndexType} from '../types';

type Props = React.FC<{
  navigation: NativeStackNavigationProp<AppStackType, 'Home'>;
}>;

const HomeScreen: Props = ({navigation}) => {
  const navToEventDetail = useCallback(
    (event: number, tab: TabIndexType) => {
      navigation.push('Details', {tabIndex: tab, event});
    },
    [navigation],
  );

  // const testLink = async () => {
  //   const url = 'test://details/2/DetailTwo';
  //   const supported = await Linking.canOpenURL(url);

  //   if (supported) {
  //     console.log(supported);
  //     await Linking.openURL(url);
  //   }
  // };

  return (
    <View style={styles.container}>
      {[1, 2].map(event => (
        <View style={styles.btnsContainer} key={event}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navToEventDetail(event, 'DetailOne')}>
            <Text style={styles.btnText}>EVENT {event} (FIRST TAB)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navToEventDetail(event, 'DetailTwo')}>
            <Text style={styles.btnText}>EVENT {event} (SECOND TAB)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navToEventDetail(event, 'DetailThree')}>
            <Text style={styles.btnText}>EVENT {event} (THIRD TAB)</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  btn: {
    backgroundColor: '#25a75c',
    padding: 16,
    borderRadius: 4,
    marginBottom: 24,
    width: '100%',
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  btnsContainer: {
    marginTop: 40,
    width: '100%',
  },
});

export default HomeScreen;
