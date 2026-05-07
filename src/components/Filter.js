import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from '../styles/color';
import { fontsize } from '../styles/fontsize';
import { padding } from '../styles/padding';
import { margin } from '../styles/margin';
import {border} from '../styles/border';
import { size } from '../styles/size';
import { spacing } from '../styles/spacing';

  const Filter = ({ route }) => {
  const { selectedRoles = [] } = route.params || {};
  const navigation = useNavigation();

  const [modalvisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textrole}>Role ({selectedRoles.length})</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Role')}
        style={{ flexDirection: 'row' }}
      >
        <Text style={styles.button}>
           Select
          {/* {selectedRoles.join(', ')} */}
        </Text>
        <Text style={styles.selectarrow}> {'>'} </Text>
      </TouchableOpacity>

      <View style={styles.selectTxtConatiner}>
        <Text style={styles.selectedTxt}> Selected roles: </Text> 
         <Text> {selectedRoles.join(', ')}</Text>

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
    top: spacing.base,
  },
  textrole: {
    fontSize:fontsize.l,
    marginLeft: margin.l,
  },
  text: {
    fontSize:fontsize.l,
    marginTop: margin.xs,
    marginLeft: margin.l,
  },
  button: {
    borderWidth: border.xs,
    borderRadius: border.xl,
    height:size.xxl,
    width:size.larger,
    marginLeft: margin.xl,
    marginTop: margin.xxs,
    paddingLeft: padding.mm,
    paddingTop: padding.xxm,
    fontSize: fontsize.s,
  },
  selectarrow: {
    fontSize:fontsize.l,
    right: spacing.long,
    top: spacing.m,
  },
  clearContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectTxtConatiner: {
},
  selectedTxt: {
    fontSize:fontsize.l,
    margin: margin.xs,
  },
  roleList: {
    fontSize: fontsize.xxl,
    marginLeft: margin.l,
  },
  title: {
    fontSize:fontsize.l,
    right:  spacing.highlevel,
    top: spacing.longest,
  },
  clearbutton: {
    fontSize:fontsize.l,
    borderWidth: border.xs,
    borderRadius: border.xl,
    height:size.xxl,
    width: size.bigger,
    paddingLeft: padding.xxxl,
    marginTop: margin.longer,
    marginLeft: margin.l,
    paddingTop: padding.xs,
  },
  applybutton: {
    borderWidth: border.xs,
    borderRadius: border.xl,
    fontSize:fontsize.l,
    elevation: spacing.s,
    paddingLeft: padding.xxxl,
    top: spacing.level,
    height: size.xxl,
    width: size.bigger,
    paddingTop: padding.xs,
    marginRight: margin.l,
    backgroundColor: color.CadetBlue,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: color.rgb,
  },
  modalContainer: {
    backgroundColor: color.white,
    padding: padding.xxm,
    borderRadius: border.xl,
    elevation: spacing.m,
    width: size.highlevel,
    height:size.longer,
  },
  closeicon: {
    fontSize: fontsize.xxl,
    alignSelf: 'center',
  },
  optionRow: {
    flexDirection: 'row',
  },
  option: {
    fontSize: fontsize.l,
    paddingVertical: padding.m,
  },
  activeicon: {
    fontSize:fontsize.l,
    top: spacing.m,
    marginLeft: margin.long,
  },
  inactiveicon: {
    fontSize:fontsize.l,
    top: spacing.m,
    marginLeft: margin.extralarge,
  },
});

