import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Check from 'react-native-vector-icons/Feather';

const Role = ({ navigation }) => {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const roles = ['Admin', 'Manager', 'Fronted Developer', 'Backend Developer'];

  const toggleRole = role => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter(r => r !== role));
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  return (
    <View style={styles.container}>
      {roles.map(role => (
        <TouchableOpacity
          key={role}
          onPress={() => toggleRole(role)}
          style={styles.roleItem}
        >
          <Text style={styles.roletext}>{role}</Text>
          {!selectedRoles.includes(role) ? (
            <Icon name="circle" size={27} style={styles.circleicon} />
          ) : (
            <Check name="check-circle" size={27} style={styles.circleicon} />
          )}
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={() => setSelectedRoles([])}>
        <View>
          <Text style={styles.filterbutton}>Clear filter</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Filter', { selectedRoles })}
      >
        <View>
          <Text style={styles.confirmbutton}>Confirm</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Role;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  circleicon: {
    bottom: 6,
    left: 360,
    fontSize: 26,
    position: 'absolute',
  },
   filterbutton: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    height: 38,
    width: 173,
    top:480,
    paddingLeft: 35,
    margin: 20,
    paddingTop: 5,
   },
  confirmbutton: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    height: 38,
    width: 173,
    top:425,
    marginLeft:220,
    paddingLeft: 50,
    paddingTop: 5,
    elevation: 8,
    backgroundColor: '#5F9EA0',
  },
});
