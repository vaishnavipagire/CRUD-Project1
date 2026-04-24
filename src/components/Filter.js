import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Filter = () => {
  const navigation = useNavigation();

  const [modalvisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Role</Text>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() => navigation.navigate('Role')}
      >
        <Text style={styles.button}>Select</Text>
        <Text style={styles.selectarrow}> {'>'} </Text>
      </TouchableOpacity>

      <Text style={styles.text}>Status</Text>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.button}>Select</Text>
        <Text style={styles.selectarrow}> {' >'} </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.clearbutton}>Clear</Text>
        <Text style={styles.applybutton}>Apply</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalvisible}
        animationType="slide"
        statusBarTranslucent={true}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Icon
              name="close"
              size={27}
              style={styles.circleicon}
              onPress={() => navigation.navigate('Close')}  
            />
            
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.option}>Active</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.option}>InActive</Text>
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
    justifyContent: 'center',
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
  clearbutton: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    height: 38,
    width: 170,
    paddingLeft: 55,
    marginTop: 600,
    marginLeft: 20,
    paddingTop: 5,
  },
  applybutton: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    height: 38,
    width: 170,
    bottom: 38,
    marginLeft: 230,
    paddingLeft: 55,
    paddingTop: 5,
    elevation: 8,
    backgroundColor: '#5F9EA0',
  },
  circleicon: {
    backgroundColor: 'red',
    // width:30,
    // marginBottom:20,
   alignSelf:'center',
   justifyContent:'center'
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContainer: {
    backgroundColor: 'white',
    // alignItems:'center',
    padding: 10,
    borderRadius: 20,
    elevation: 10,
    width: 412,
    height: 150,
  },
  option: {
    fontSize: 20,
    paddingVertical: 7,
  },
});
