import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FullPageSpinner from '../components/FullPageSpinner';
import {useDetail} from '../providers/DetailProvider/DetailContext';
import {AppStackType, AppTabType, TabIndexType} from '../types';
import DetailOneScreen from './detailOne.screen';
import DetailThreeScreen from './detailThree.screen';
import DetailTwoScreen from './detailTwo.screen';

type Props = React.FC<{
  navigation: NativeStackNavigationProp<AppStackType, 'Details'>;
  route: RouteProp<AppStackType, 'Details'>;
}>;

const Tab = createMaterialTopTabNavigator<AppTabType>();

const DetailsTabNav: Props = ({route, navigation}) => {
  const {tabIndex, event} = route.params;

  // const [tabState, setTabState] = useState<TabIndexType | undefined>(undefined);
  // const [modalVisible, setModalVisible] = useState(false);

  const {changeCurrentEvent} = useDetail();

  // const goBack = useCallback(() => {
  //   navigation.goBack();
  // }, [navigation]);

  // const changeTabState = useCallback((val: TabIndexType) => {
  //   setTabState(val);
  // }, []);

  // const openModal = useCallback(() => {
  //   setModalVisible(true);
  // }, []);

  // const closeModal = useCallback(() => {
  //   setModalVisible(false);
  // }, []);

  // useEffect(() => {
  //   setTabState(tabIndex);
  // }, [tabIndex]);

  useEffect(() => {
    changeCurrentEvent(event);
  }, [event, changeCurrentEvent]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalBox}>
              <Text>{tabState}</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Modal> */}

      {/* <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <TouchableOpacity onPress={openModal}>
          <Text>Options</Text>
        </TouchableOpacity>
      </View> */}

      <Tab.Navigator
        initialRouteName={tabIndex || 'DetailOne'}
        screenOptions={{
          swipeEnabled: false,
          lazy: true,
          lazyPlaceholder: () => <FullPageSpinner />,
          tabBarLabelStyle: {fontSize: 13, fontWeight: '600'},
        }}>
        <Tab.Screen
          name="DetailOne"
          // children={props => (
          //   <DetailOneScreen changeTabState={changeTabState} {...props} />
          // )}
          component={DetailOneScreen}
          options={{
            title: 'Detail one',
          }}
        />
        <Tab.Screen
          name="DetailTwo"
          // children={props => (
          //   <DetailTwoScreen changeTabState={changeTabState} {...props} />
          // )}
          component={DetailTwoScreen}
          options={{
            title: 'Detail two',
          }}
        />
        <Tab.Screen
          name="DetailThree"
          // children={props => (
          //   <DetailThreeScreen changeTabState={changeTabState} {...props} />
          // )}
          component={DetailThreeScreen}
          options={{
            title: 'Detail three',
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginVertical: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default DetailsTabNav;
