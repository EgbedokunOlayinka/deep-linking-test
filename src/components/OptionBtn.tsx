import React, {useCallback, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDetail} from '../providers/DetailProvider/DetailContext';

const OptionBtn = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const {currentTab, currentEvent} = useDetail();

  return (
    <>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalBox}>
              <Text>{`Event ${currentEvent}-${currentTab}`}</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TouchableOpacity onPress={openModal}>
        <Text>Options</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: 200,
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 4,
  },
});

export default OptionBtn;
