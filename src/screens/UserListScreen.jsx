import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import Squarecircle from 'react-native-vector-icons/dist/Feather';
import Searchicon from 'react-native-vector-icons/dist/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const UserListScreen = () => {
  const Navigation = useNavigation();

  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  const getAPIData = async () => {
    const url = 'https://69c275e57518bf8facbe6b7a.mockapi.io/users/user';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    setFilteredData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  const handleSearch = text => {
    setSearch(text);

    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const renderUserItem = ({ item }) => (
    <View style={styles.container1}>
      <Image source={{ uri: item.avatar }} style={styles.image} />
      <View style={styles.Container3}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ fontSize: 16 }}>{item.email}</Text>
        <Text style={{ fontSize: 16 }}>{item.phone}</Text>
      </View>

      <TouchableOpacity
        style={styles.deletebutton}
        onPress={() => Navigation.navigate('AddUserScreen')}>
        <Text style={{ color: 'white' }}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.updatebutton}
       onPress={() => Navigation.navigate('AddUserScreen',{item:item})}>
        <Text style={{ color: 'white' }}>Update</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Users</Text>
      <Icon name="plus" size={20} style={styles.icon} />
      <Searchicon name="search" size={30} style={styles.searchicon} />
      <TextInput
        style={styles.searchBar}
        placeholder="Search users"
        value={search}
        onChangeText={handleSearch}
      />
      <Squarecircle
        name="plus-circle"
        size={40}
        style={styles.circleicon}
        onPress={() => Navigation.navigate('AddUserScreen')}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderUserItem}
      />
    </View>
  );
};
export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    border: 1,
    padding: 3,
  },
  text: {
    margintop: 10,
    fontSize: 21,
    top: 10,
    left: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 6,
    fontSize: 15,
    color: 'black',
    margin: 20,
    borderWidth: 1,
    right: 20,
    left: 0,
    borderColor: 'black',
  },
  icon: {
    position: 'absolute',
    top: 21,
    left: 380,
    right: 0,
    bottom: 0,
  },
  searchicon: {
    position: 'absolute',
    margin: 56,
    marginLeft: 23,
    left: 6,
  },
  circleicon: {
    position: 'absolute',
    fontSize: 40,
    right: 0,
    bottom: 0,
    zIndex: 1,
    // top:900,
  },
  item: {
    fontSize: 18,
    padding: 10,
  },
  container1: {
    flex: 1,
    padding: 15,
    // paddingLeft:170,
    fontWeight: 'bold',
  },
  Container3: {
    position: 'absolute',
    marginLeft: 100,
    padding: 6,
  },
    updatebutton: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 4,
    paddingVertical: 3,
    height: 25,
    width: 65,
    right: 0,
    padding: 10,
    top: 20,
  },
  deletebutton: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 4,
    paddingVertical: 3,
    height: 25,
    width: 65,
    right: 0,
    padding: 10,
    bottom: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 47,
  },
});
