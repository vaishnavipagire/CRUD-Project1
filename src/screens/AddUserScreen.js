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
import { deleteUser } from '../services/api';
import { useRoute } from '@react-navigation/native';
import { createUser,updateUser} from '../services/api';

const AddUserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const editItem = route.params?.item

  const [selectedItem, setSelectedItem] = useState();
  const [formData, setFormData] = useState({
    id: editItem?.id || '',
    name: editItem?.name || '',
    email: editItem?.email || '',
    role: editItem?.role || '',
    phone: editItem?.phone || '',
    status: editItem?.status || '',

  });
  useEffect(()=>{
  if(editItem){
    setFormData(editItem);
  }
  },[]);
  const handleChange = (key, value)=>{
    setFormData({...formData, [key]:value});
  }
  const handleSave = async () => {
       if (editItem) {
      await updateUser(editItem.id, formData);
    } else {
      await createUser(formData);
    }
    navigation.navigate('UserListScreen');
  };

  const handledelete = async () => {
     await deleteUser(editItem.id);
     navigation.navigate('UserListScreen');
    } 
   return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>Add/Edit User</Text>
        <TouchableOpacity onPress={() => handleSave()}>
          <Text style={styles.text2}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.hzline}></View>
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

      <View style={styles.hzline1}></View>
      <View style={{ top: 36 }}>
        <Text style={{ fontSize: 17, top: 10 }}>Full Name</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={(text) =>handleChange('name',text)}/>

        <Text style={{ fontSize: 17, top: 15 }}>Email</Text>
        <TextInput
          style={styles.textinput1}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => handleChange('email',text)}/>

        <View style={styles.hzline3}></View>
        <View style={styles.rolecontainer}>
          <Text style={{ fontSize: 19 }}>Role</Text>
          <View style={{ left: 166 }}>
            <View style={styles.roleDropdownList}>
              <Picker
                // selectedValue={selectedItem}
                selectedValue={formData.role}
                // onValueChange={itemValue => setSelectedItem(itemValue)}
                onValueChange={itemValue => handleChange('role',itemValue)}
                >
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
                onChangeText={(value) => handleChange('phone',value)}
                value={formData.phone}
              />
            </View>
          </View>

          <View style={styles.statuscontainer}>
            <Text style={{ fontSize: 18 }}>Status</Text>
            <View style={{ position: 'absolute', left: 240 }}>
              {/* <TextInput
                style={styles.statustextinput3}
                value={formData.status}
                onChangeText={text => setFormData(text)}
              /> */}
              <View style={styles.statusinput}>
                <Picker
                 selectedValue={formData.status}
                  onValueChange={itemValue => handleChange('status',itemValue)}
                  // selectedValue={selectedItem}
                  // onValueChange={itemValue => setSelectedItem(itemValue)}
                >
                  <Picker.Item label="Active" value="Active" />
                  <Picker.Item label="Inactive" value="Inactive" />
                  <Picker.Item label="All" value="All" />
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.hzline6}></View>
      <TouchableOpacity
        style={styles.deletebutton}
        onPress={() => handledelete()}>
        <Text style={{ color: 'white' }}>Delete User</Text>
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
    fontSize: 20,
    right: 30,
  },
  text2: {
    fontSize: 20,
    backgroundColor: '#2b50c0',
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 6,
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
    paddingBottom: 8,
  },
  hzline1: {
    height: 1,
    width: 500,
    right: 20,
    backgroundColor: 'grey',
    top: 35,
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
    borderColor: 'grey',
    padding: 10,
  },
  textinput1: {
    borderWidth: 1,
    top: 20,
    marginBottom: 10,
    borderRadius: 4,
    borderColor: 'grey',
    padding: 11,
  },
  hzline3: {
    height: 1,
    width: 500,
    right: 20,
    backgroundColor: 'grey',
    top: 20,
  },
  rolecontainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 30,
    padding: 2,
  },
  roleDropdownList: {
    borderWidth: 1,
    borderColor: 'grey',
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
    height: 40,
    width: 120,
    margin: 10,
    // paddingHorizontal:8,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:5
  },
  hzline6: {
    height: 1,
    width: 500,
    right: 20,
    backgroundColor: 'grey',
    top: 30,
  },
  container5: {
    flex: 1,
  },
  hzline6: {
    height: 1,
    width: 500,
    right: 20,
    backgroundColor: 'grey',
    top: 31,
  },
  deletebutton: {
    position: 'absolute',
    backgroundColor: '#e32f2fdd',
    padding: 10,
    right: 40,
    borderRadius: 6,
    fontSize: 20,
    paddingVertical: 6,
    paddingHorizontal: 130,
    marginTop: 850,
    Color: 'white',
  },
  hzline: {
    height: 1,
    width: 500,
    right: 20,
    backgroundColor: 'grey',
    top: 6,
  },
});
export default AddUserScreen;
