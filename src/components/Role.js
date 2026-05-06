import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Check from 'react-native-vector-icons/Feather';
import {color} from '../styles/color';
import { fontsize } from '../styles/fontsize';
import { padding } from '../styles/padding';
import { margin } from '../styles/margin';
import { border } from '../styles/border';
import { size } from '../styles/size';


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
            <Icon name="circle"  style={styles.circleicon} />
          ) : (
            <Check name="check-circle"  style={styles.circleicon} />
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
    fontSize: fontsize.l,
    borderWidth: border.xs,
    height: size.xxl,
    width:size. longlevel,
    color: color.black,
    borderRadius: border.xl,
    marginLeft: margin.xs,
    marginTop: margin.xl,
    paddingLeft: padding.l,
    paddingTop: padding.xs,
  },
  circleicon: {
    bottom: 6,
    left: 360,
    fontSize: fontsize.xxl,
    position: 'absolute',
  },
  filterbutton: {
    fontSize: fontsize.l,
    borderWidth: border.xs,
    borderRadius: border.xl,
    height: size.xxl,
    width: size.highestlevel,
    top: 480,
    paddingLeft: padding.large,
    margin: margin.l,
    paddingTop: padding.xs,
  },
  confirmbutton: {
    fontSize: fontsize.l,
    borderWidth: border.xs,
    borderRadius: border.xl,
    height:size.xxl,
    width: size. highestlevel,
    top: 425,
    marginLeft: margin.big,
    paddingLeft: padding.extralarge,
    paddingTop: padding.xs,
    elevation: 8,
    backgroundColor: color.CadetBlue,
  },
});
