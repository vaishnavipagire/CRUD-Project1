import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Check from 'react-native-vector-icons/Feather';

const Role = () => {
const[hide,setHide] = useState(false);

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={ ()=>setHide(!hide)} style={{ color: 'grey' }}>
        <Text style={styles.roletext}>Admin</Text>
        {
          !hide ? 
          <Icon name="circle" size={27} style={styles.circleicon} /> 
          : 
          <Check name="check-circle" size={27} style={styles.circleicon} />
        }
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setHide(!hide)} style={{ color: 'grey' }}>
        <Text style={styles.roletext}>Manager</Text>
        {
          !hide ?
          <Icon name={"circle"} size={27} style={styles.circleicon} />
          :
         <Check name="check-circle" size={27} style={styles.circleicon} />
        }
       </TouchableOpacity>

      <TouchableOpacity  onPress={()=>setHide(!hide)}style={{ color: 'grey' }}>
        <Text style={styles.roletext}>Fronted Developer</Text>
        {
          !hide ?
          <Icon name={"circle"} size={27} style={styles.circleicon} />
          :
         <Check name="check-circle" size={27} style={styles.circleicon} />
        }
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=>(!hide)}style={{ color: 'grey' }}>
        <Text style={styles.roletext}>Backend Developer</Text>
        {
          !hide ?
          <Icon name="circle" size={27} style={styles.circleicon} />
          :
          <Check name="check-circle" size={27} style={styles.circleicon} />
        }
        
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Text style={styles.filterbutton}>Clear filter</Text>
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
