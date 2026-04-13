import React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import {deleteUser} from '../services/api';
 
const AddUserScreen = () => {
  
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

   const postAPIData = async()=>{
  const url = 'https://69c275e57518bf8facbe6b7a.mockapi.io/users/userList';
  let result = await fetch(url,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(
      {
        name,
        email,
        role,
        phone,
        status,
      }
    )
  });
   result = await result.json();
   console.log(result);
     }

    const handledelete  = async()=>{
     try{
          await deleteUser(item.id)
          navigation.navigate('UserListScreen')
     }catch(err){
      console.log('handle delete err', err);
      }
    }
     useEffect(() => {
     postAPIData();
       }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            postAPIData();
            navigation.navigate('UserListScreen');
          }}
        >
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>Add/Edit User</Text>
        <TouchableOpacity onPress={() => 
        navigation.navigate('UserListScreen')}>
          <Text style={styles.text2}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.hzline}>
      </View>

      <View>
        <View>
          <Image
            source={require('../assets/Imageicon.jpg')}
            style={styles.imageicon}/>
        </View>

        <TouchableOpacity style={styles.edit}>
          <Text style={{ color: 'blue', left: 15, top: 5 }}>Edit photo</Text>
        </TouchableOpacity>
      </View>

       <View style={styles.hzline1}>
      </View>
      <View style={{ top:36}}>
        <Text style={{ fontSize: 17, top: 10 }}>Full Name</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}/>
         
        <Text style={{ fontSize: 17, top: 15}}>Email</Text>
        <TextInput
          style={styles.textinput1}
          placeholder="Enter your email"
          value={email}
          onChangeText={text => setEmail(text)}/>

       <View style={styles.hzline3}>
      </View>
        <View style={styles.rolecontainer}>
          <Text style={{ fontSize: 19}}>Role</Text>
          <View style={{ left: 166 }}>
            <View style={styles.roleDropdownList}>
              <Picker
                selectedValue={selectedItem}
                onValueChange={itemValue => setSelectedItem(itemValue)} >
                <Picker.Item label="Admin" value="Admin" />
                <Picker.Item label="Manager" value="Manager" />
                <Picker.Item label="Administrator" value="Administrator" />
              </Picker>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.phonecontainer}>
            <Text style={{ fontSize: 18 }}>Phone Number</Text>
            <View style={{ position: 'absolute', left: 380 }}>
              <TextInput
                style={styles.phoneinput}
                placeholder="+9124567899"
                onChangeText={value => setPhone(value)}
                value={phone} />
            </View>
          </View>

       <View style={styles.statuscontainer}>
            <Text style={{ fontSize: 18 }}>Status</Text>
            <View style={{ position: 'absolute', left: 240 }}>
              <TextInput
                style={styles.statustextinput3}
                value={role}
                onChangeText={text => setStatus(text)}
              />
              <View style={styles.statusinput}>
                <Picker
                  selectedValue={selectedItem}
                  onValueChange={itemValue => setSelectedItem(itemValue)} >
                  <Picker.Item label="Active" value="Active" />
                  <Picker.Item label="Inactive" value="Inactive" />
                  <Picker.Item label="All" value="All" />
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.hzline6}>
      </View>
      <TouchableOpacity style={styles.deletebutton}>
        <Text style={{ color: 'white'}}>Delete User</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //  flex:1,
    padding: 20,
  },
  header: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
  },
  text: {
    paddingLeft: 0,
    paddingRight: 100,
    fontSize: 20,
  },
  text1: {
    paddingRight: 30,
    fontWeight: 'bold',
    fontSize:20,
    right: 30,
  },
  text2: {
    fontSize:20,
    backgroundColor:'#2b50c0',
    color: 'white',
    paddingHorizontal: 10,
    borderRadius:6,
  },
  photo: {
    height: 200,
    width: 200,
    left: 150,
    top: 20,
  },
  imageicon: {
    width: 130,
    height: 130,
    borderRadius: 100,
    left: 120,
    top: 17,
  },
  edit: {
    borderWidth: 0.5,
    height: 25,
    width: 100,
    left: 138,
    borderColor: 'grey',
    borderRadius: 5,
    top: 23,
    paddingBottom:8,
  },
  hzline1:{
    height:1,
    width:500,
    right:20,
    backgroundColor:'grey',
    top:35,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    top: 700,
    borderRadius: 6,
    paddingHorizontal: 130,
    paddingVertical: 6,
  },
  textinput: {
    borderWidth: 1,
    top: 15,
    marginBottom: 10,
    borderRadius: 4,
    borderColor:'grey',
    padding:10,
  },
  textinput1:{
    borderWidth: 1,
    top: 20,
    marginBottom: 10,
    borderRadius: 4,
    borderColor:'grey',
    padding:11,
  },
  hzline3:{
     height:1,
    width:500,
    right:20,
    backgroundColor:'grey',
    top:20,
  },
  rolecontainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 30,
    padding:2,
  },
  roleDropdownList: {
    borderWidth: 1,
    borderColor:'grey',
    width: 165,
    height: 39,
    marginBottom: 1,
    borderRadius: 4,
    marginTop: 3,
    paddingHorizontal: 1,
  },
  phonecontainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 6,
    padding: 1,
    paddingVertical: 10,
  },
  phoneinput: {
    position: 'absolute',
    right: 2,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    margin: 8,
    padding: 10,
    height: 39,
    width: 165,
    flexDirection: 'row',
  },
  statuscontainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 4,
    padding: 5,
    paddingVertical: 20,
  },
  statustextinput3: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    margin: 13,
    height: 39,
    width: 116,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  statusinput: {
    position: 'absolute',
    height: 110,
    width: 140,
    margin: 10,
    paddingHorizontal: 8,
  },
  hzline6:{
    height:1,
    width:500,
    right:20,
    backgroundColor:'grey',
    top:30,
  },
  container5: {
    flex: 1,
  },
  hzline6:{
    height:1,
    width:500,
    right:20,
    backgroundColor:'grey',
    top:31,
  },
  deletebutton: {
    position: 'absolute',
    backgroundColor: '#e32f2fdd',
    padding: 10,
    right: 40,
    borderRadius:6,
    fontSize: 20,
    paddingVertical: 6,
    paddingHorizontal: 130,
    marginTop: 850,
    Color: 'white',
  },
  hzline:{
    height:1,
    width:500,
    right:20,
    backgroundColor:'grey',
    top:6,
  }
});
export default AddUserScreen;
