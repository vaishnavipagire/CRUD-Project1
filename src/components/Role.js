import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';
import { useNavigation } from '@react-navigation/native';

const Role = () => {
  const navigation = useNavigation();

  const [selectedRole, setselectedRole] = useState();

  const roles = ['Admin', 'Manager', 'Fronted Developer', 'BackendDeveloper'];
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ color: 'grey' }}>
        <Text style={styles.roletext}>Admin</Text>
        <Icon
          name={selectedRole === item ? 'check' : 'circle'}
          size={27}
          style={styles.circleicon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ color: 'grey' }}>
        <Text style={styles.roletext}>Manager</Text>
        <Icon
          name={selectedRole === item ? 'check' : 'circle'}
          size={27}
          style={styles.circleicon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ color: 'grey' }}>
        <Text style={styles.roletext}>Fronted Developer</Text>
        <Icon
          name={selectedRole === item ? 'check' : 'circle'}
          size={27}
          style={styles.circleicon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ color: 'grey' }}>
        <Text style={styles.roletext}>Backend Developer</Text>
        <Icon
          name={selectedRole === item ? 'check' : 'circle'}
          size={27}
          style={styles.circleicon}
        />
      </TouchableOpacity>
      //Button
      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <TouchableOpacity onPress={() => setselectedRole('')}>
          <Text style={styles.filterbutton}>Clear filter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Filter', { role: selectedRole })}
        >
          <Text style={styles.confirmbutton}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Role;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roleBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  roletext: {
    fontSize: 20,
    borderWidth: 1,
    height: 38,
    width: 390,
    color: 'black',
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 30,
    paddingLeft: 12,
    paddingTop: 5,
    backgroundColor: '#79afb1',
  },
  circleicon: {
    bottom: 6,
    left: 360,
    fontSize: 24,
    position: 'absolute',
  },
  filterbutton: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    height: 38,
    width: 172,
    paddingLeft: 35,
    marginTop: 470,
    marginLeft: 20,
    paddingTop: 5,
  },
  confirmbutton: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    height: 38,
    width: 172,
    bottom: 38,
    marginLeft: 230,
    paddingLeft: 50,
    paddingTop: 5,
    elevation: 8,
    backgroundColor: '#5F9EA0',
  },
});
