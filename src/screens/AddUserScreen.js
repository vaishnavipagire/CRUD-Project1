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
import { color } from '../styles/color';
import { fontsize } from '../styles/fontsize';
import { padding } from '../styles/padding';
import { margin } from '../styles/margin';
import { border } from '../styles/border';
import { size } from '../styles/size';
import { spacing } from '../styles/spacing';
import { content } from '../styles/content';

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
  const [error, setError] = useState({});

  useEffect(() => {
    if (editItem) {
      setFormData(editItem);
    }
  }, []);
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });

    setError({ ...error, [key]: '' });
  };
  //Validation Function
  const validate = () => {
    let newErrors = {};

    //Name
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Only letters allowed';
    }
    //Email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    //Phone
    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSave = async () => {
    if (!validate()) return;

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
          <Text style={{ color: color.blue, left: spacing.l, top: spacing.xxs }}>
            Edit photo
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.hzline1}></View>
      <View style={{ top: spacing.higher }}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.nameinput}
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={text => handleChange('name', text)}
        />
        {error.name && <Text style={styles.error}>{error.name}</Text>}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.emailinput}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={text => handleChange('email', text)}
        />
        {error.email && <Text style={styles.error}>{error.email}</Text>}

        <View style={styles.hzline3}></View>
        <View style={styles.rolecontainer}>
          <Text style={styles.label}>Role</Text>
          <View>
            <View style={styles.roleDropdownList}>
              <Picker
                selectedValue={formData.role}
                onValueChange={itemValue => handleChange('role', itemValue)}
              >
                <Picker.Item label="Admin" value="Admin" />
                <Picker.Item label="Manager" value="Manager" />
                <Picker.Item label="Administrator" value="Administrator" />
                <Picker.Item
                  label="Fronted Developer"
                  value="Fronted Developer"
                />
                <Picker.Item
                  label="Backend Developer"
                  value="Backend Developer"
                />
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
                value={formData.phone}
              />

              {error.phone && <Text style={styles.error}>{error.phone}</Text>}
            </View>
          </View>

          <View style={styles.statuscontainer}>
            <Text style={styles.label1}>Status</Text>
            <View style={{ position: 'absolute', left: spacing.larger }}>
              <View style={styles.statusinput}>
                <Picker
                  selectedValue={formData.status}
                  onValueChange={itemValue => handleChange('status', itemValue)}
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
        onPress={() => handledelete()}
      >
        <Text style={{ color: color.white }}>Delete User</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: padding.xxm,
    backgroundColor: color.white,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: padding.xxm,
  },
  text: {
    paddingRight: padding.long,
    fontSize: fontsize.l,
  },
  text1: {
    paddingRight: padding.medium,
    fontWeight: 'bold',
    fontSize: fontsize.l,
    right: spacing.big,
  },
  text2: {
    fontSize: fontsize.s,
    backgroundColor: color.blue,
    color: color.white,
    paddingHorizontal: padding.xl,
    borderRadius: border.l,
    paddingVertical: padding.xxs,
  },
  photo: {
    height: size.high,
    width: size.high,
    left: spacing.biglevel,
    top: spacing.xxl,
  },
  imageicon: {
    width: size.long,
    height: size.long,
    borderRadius: border.big,
    left: spacing.highestlevel,
    top: spacing.xl,
  },
  edit: {
    borderWidth: border.xxs,
    height: size.m,
    width: size.higher,
    left: spacing.high,
    borderColor: color.grey,
    borderRadius: border.xm,
    top: spacing.xxxl,
    paddingBottom: padding.xm,
  },
  hzline1: {
    height: size.s,
    width: size.biggestlevel,
    right: spacing.xxl,
    backgroundColor: color.grey,
    top: spacing.biggest,
  },
  label: {
    fontSize: fontsize.l,
    marginTop: margin.xm,
  },
  button: {
    alignItems: 'center',
    backgroundColor: color.red,
    padding: padding.xxm,
    top:spacing.longlevel,
    borderRadius: border.l,
    paddingHorizontal: padding.longer,
    paddingVertical: padding.s,
  },
  nameinput: {
    borderWidth: border.xs,
    borderColor: color.grey,
    borderRadius: border.m,
    padding: padding.xxm,
    marginTop: margin.xxs,
  },
  emailinput: {
    borderWidth: border.xs,
    borderColor: color.grey,
    borderRadius: border.m,
    padding: padding.xxm,
    marginTop: margin.xxs,
  },
  hzline3: {
    height: size.s,
    width: size.biggestlevel,
    right: spacing.xxl,
    backgroundColor: color.grey,
    top: spacing.xxl,
  },
  rolecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: margin.l,
  },
  roleDropdownList: {
    borderWidth: border.xs,
    borderColor: color.grey,
    width: size.highest,
    height: size.xxl,
    borderRadius: border.m,
    marginTop: margin.s,
  },
  phonecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label1: {
    fontSize: fontsize.l,
  },
  phoneinput: {
    borderWidth: border.xs,
    borderColor: color.grey,
    borderRadius: border.m,
    padding: padding.xm,
    width: size.longer,
    marginTop: margin.xm,
  },
  error: {
    color: color.red,
    fontSize: fontsize.m,
  },
  statuscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: margin.xs,
  },
  statusinput: {
    borderWidth: border.xs,
    borderColor: color.grey,
    width: size.longer,
    height:size.xxxl,
    borderRadius: border.m,
    marginTop: margin.m,
  },
  hzline6: {
    height: size.s,
    width: size. biggestlevel,
    right: spacing.xxl,
    backgroundColor: color.grey,
    top: spacing.longer,
  },

 deletebutton: {
    position: 'absolute',
    backgroundColor: color.red,
    padding: padding.xxm,
    right: spacing.long,
    borderRadius: border.l,
    fontSize: fontsize.l,
    paddingVertical: padding.s,
    paddingHorizontal: padding.longer,
    marginTop: margin.higher,
    Color: color.white,
  },
  hzline: {
    height: size.s,
    width:  size.biggestlevel,
    right: spacing.xxl,
    backgroundColor: color.grey,
    top: spacing.xs,
  },
});
export default AddUserScreen;
