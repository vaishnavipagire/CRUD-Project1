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
import { createUser, updateUser } from '../services/api';

const AddUserScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const editItem = route.params?.item;

  const [formData, setFormData] = useState({
    id: editItem?.id || '',
    name: editItem?.name || '',
    email: editItem?.email || '',
    role: editItem?.role || '',
    phone: editItem?.phone || '',
    status: editItem?.status || '',
  });
   const[error, setError] = useState({});

    useEffect(() => {
 if (editItem) {
      setFormData(editItem);
    }
  }, []);
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });

    setError({...error,[key]:''});
  };
    //Validation Function
  const validate =()=> {
     let newErrors = {};

     //Name
      if(!formData.name){
      newErrors.name ='Name is required';
     }
     else if(!/^[A-Za-z\s]+$/.test(formData.name))
      {
      newErrors.name='Only letters allowed';
     }
     //Email
      if(!formData.email)
        {
      newErrors.email ='Email is required';
     }
     else if(!/\S+@\S+\.\S+/.test(formData.email)){
      newErrors.email='Invalid email';
     }
     //Phone
      if(!formData.phone)
        {
      newErrors.phone ='Phone is required';
     }
     else if(!/^\d{10}$/.test(formData.phone)){
      newErrors.phone = 'Phone must be 10 digits';
     }
     setError(newErrors);

     return Object.keys(newErrors).length === 0;
  }
  const handleSave = async () => {
    if(!validate())return;
  
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
  };
  
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
            source={
                 editItem?.avatar
                ? { uri: editItem.avatar }
                : require('../assets/Imageicon.jpg') 
               }
            style={styles.imageicon}
          />
        </View>

        <TouchableOpacity style={styles.edit}>
          <Text style={{ color: 'blue', left: 15, top: 5 }}>Edit photo</Text>
        </TouchableOpacity>
      </View>

     <View style={styles.hzline1}></View>
      <View style={{ top: 36 }}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.nameinput}
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={text => handleChange('name', text)}
        />
          {error.name && <Text style = {styles.error}>{error.name}</Text>}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.emailinput}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={text => handleChange('email', text)}
        />
           {error.email && <Text style = {styles.error}>{error.email}</Text>}

        <View style={styles.hzline3}></View>
        <View style={styles.rolecontainer}>
          <Text style={styles.label}>Role</Text>
          <View>
            <View style={styles.roleDropdownList}>
              <Picker
                selectedValue={formData.role}
                onValueChange={itemValue => handleChange('role', itemValue)}>
                <Picker.Item label="Admin" value="Admin" />
                <Picker.Item label="Manager" value="Manager" />
                <Picker.Item label="Administrator" value="Administrator" />
              </Picker>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.phonecontainer}>
            <Text style={styles.label1}>Phone Number</Text>
            <View>
              <TextInput
                style={styles.phoneinput}
                placeholder="+9124567899"
                onChangeText={value => handleChange('phone', value)}
                value={formData.phone}/>

                {error.phone && <Text style = {styles.error}>{error.phone}</Text>}
          </View>
          </View>

          <View style={styles.statuscontainer}>
            <Text style={styles.label1}>Status</Text>
            <View style={{ position: 'absolute', left: 240 }}>
              <View style={styles.statusinput}>
                <Picker
                  selectedValue={formData.status}
                  onValueChange={itemValue => handleChange('status', itemValue)}>
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
    flex:1,
    padding:10,
    backgroundColor:'#fff',
  },
  header: {
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop:10,
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
    fontSize: 17,
    backgroundColor: '#2b50c0',
    color: 'white',
    paddingHorizontal: 14,
    borderRadius: 6,
    paddingVertical: 3,
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
  label:{
    fontSize:20,
    marginTop:15,
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
  nameinput: {
    borderWidth: 1,
    borderColor: 'grey',
     borderRadius: 4,
     padding: 10,
     marginTop: 6,
   },
  emailinput: {
     borderWidth: 1,
    borderColor: 'grey',
     borderRadius: 4,
     padding: 10,
     marginTop: 6,
  },
  hzline3: {
    height: 1,
    width: 500,
    right: 20,
    backgroundColor: 'grey',
    top: 20,
  },
  rolecontainer: {
     flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop: 20,
  },
  roleDropdownList: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 150,
    height:38,
    borderRadius:4,
    marginTop:12,
  },
  phonecontainer: {
    flexDirection: 'row',
   justifyContent:'space-between',
   alignItems:'center',
  },
  label1:{
     fontSize:20,
    },
  phoneinput: {
    borderWidth: 1,
    borderColor: 'grey',
     borderRadius:4,
     padding:8,
     width:148,
     marginTop:15,
    },
  error:{
    color:'red',
    fontSize:18,
   },
  statuscontainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop: 10,
  },
  statusinput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 149,
    height:39,
    borderRadius:4,
    marginTop:13,
 },
  hzline6: {
    height: 1,
    width: 500,
    right: 20,
    backgroundColor: 'grey',
    top:55,
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
    marginTop: 810,
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
    