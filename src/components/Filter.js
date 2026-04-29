import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Filter = ({ route }) => {
  const { selectedRoles = [] } = route.params || {};
  const navigation = useNavigation();

  const [modalvisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textrole}>Role</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Role')}
        style={{ flexDirection: 'row' }}
      >
        <Text style={styles.button}>
          {selectedRoles.length > 0 ? `(${selectedRoles.length})` : 'Select'}
        </Text>
        <Text style={styles.selectarrow}> {'>'} </Text>
      </TouchableOpacity>
      
      <View style={styles.selectTxtConatiner}>
        <Text style={styles.selectedTxt}> Selected roles: </Text>
        {selectedRoles.map((item, idx) => (
          <View key={idx} style={styles.roleList}>
            <Text style={{fontSize:20}}>{item}</Text>
          </View>
        ))}
      </View>
      {/* //Status section */}
      <Text style={styles.text}>Status</Text>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ flexDirection: 'row' }}
      >
        <Text style={styles.button}>{status ? status : 'Select'}</Text>
        <Text style={styles.selectarrow}>{'>'}</Text>
      </TouchableOpacity>
      <View style={styles.clearContainer}>
        <TouchableOpacity onPress={() => setStatus('')}>
          <Text style={styles.clearbutton}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('UserListScreen', {
              selectedRoles,
              status,
            })
          }
        >
          <Text style={styles.applybutton}>Apply</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible={modalvisible}
        animationType="slide"
        statusBarTranslucent={true}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name="close" style={styles.closeicon} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setStatus('Active');
                setModalVisible(false);
              }}
              style={styles.optionRow}
            >
              <Text style={[styles.option, status === 'Active']}>Active </Text>
              <Icon
                name={
                  status === 'Active' ? 'radio-button-on' : 'radio-button-off'
                }
                style={styles.activeicon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setStatus('Inactive');
                setModalVisible(false);
              }}
              style={styles.optionRow}
            >
              <Text style={[styles.option, status === 'Inactive']}>
                {' '}
                Inactive{' '}
              </Text>
              <Icon
                name={
                  status === 'Inactive' ? 'radio-button-on' : 'radio-button-off'
                }
                style={styles.inactiveicon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Filter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 12,
  },
  textrole: {
    fontSize: 20,
    marginLeft: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    height: 38,
    width: 350,
    marginLeft: 30,
    marginTop: 6,
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 16,
  },
  selectarrow: {
    fontSize: 20,
    right: 40,
    top: 10,
  },
  clearContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectTxtConatiner: {},
  selectedTxt: {
    fontSize: 20,
    margin: 10,
  },
  roleList: {
    fontSize: 25,
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    right: 360,
    top: 50,
  },
  clearbutton: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    height: 38,
    width: 170,
    paddingLeft: 55,
    marginTop: 520,
    marginLeft: 20,
    paddingTop: 5,
  },
  applybutton: {
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 20,
    elevation: 8,
    paddingLeft: 55,
    top: 520,
    height: 38,
    width: 170,
    paddingTop: 5,
    marginRight: 20,
    backgroundColor: '#5F9EA0',
  },
  circleicon: {
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    elevation: 10,
    width: 412,
    height: 150,
  },
  closeicon: {
    fontSize: 27,
    alignSelf: 'center',
  },
  optionRow: {
    flexDirection: 'row',
  },
  option: {
    fontSize: 20,
    paddingVertical: 7,
  },
  activeicon: {
    fontSize: 25,
    top: 10,
    marginLeft: 300,
  },
  inactiveicon: {
    fontSize: 25,
    top: 10,
    marginLeft: 280,
  },
});
