import React,{ useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import Squarecircle from 'react-native-vector-icons/dist/Feather';
import Searchicon from 'react-native-vector-icons/dist/EvilIcons';
import { useNavigation } from '@react-navigation/native';

  const UserListScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

   const getAPIData = async () => {
    try{
       const url = 'https://69c275e57518bf8facbe6b7a.mockapi.io/users/userList';
      let result = await fetch(url);
      result = await result.json();
      setData(result);
     setFilteredData(result);
    }
    catch (error) {
      console.error("Fetch error:", error);
    }finally {
      setLoading(false);
      setRefreshing(false);
    }
  };
  useEffect(() => {
    getAPIData();
  }, []);

   const onRefresh = () => {
    setRefreshing(true);
    getAPIData(); 
  };

  const handleSearch = text => {
    setSearch(text);
    if (!text) {
      setFilteredData(data);
      return;
    }
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

    const renderItem = ({ item }) => (
    <View style={styles.container1}>
      <Image source={{ uri: item.avatar }} style={styles.image} />
      <View style={styles.Container3}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ fontSize: 16 }}>{item.email}</Text>
        <Text style={{ fontSize: 16 }}>{item.phone}</Text>
      </View>
   {/* <TouchableOpacity
        style={styles.deletebutton}
        onPress={() => navigation.navigate('AddUserScreen',{item})}>
        <Text style={{ color: 'white' }}>Delete</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.updatebutton}
        onPress={() => navigation.navigate('AddUserScreen', { item: item })}
      >
        <Text style={{ color: 'white' }}>Update</Text>
      </TouchableOpacity> */}
    </View>
  );
  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Users</Text>
      <Icon name="plus" size={17} style={styles.icon}
      onPress={() => navigation.navigate('AddUserScreen')}
      />
  
      <Searchicon name="search" size={30} style={styles.searchicon} />
      <TextInput style={styles.searchBar} placeholder="Search users"
        value={search} onChangeText={handleSearch}
      />
      <Squarecircle name="plus" size={45} style={styles.circleicon}
        onPress={() => navigation.navigate('AddUserScreen')}/>
        {/* <Text>{'>'} </Text> */}
       <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        refreshing={refreshing}
        onRefresh={onRefresh}
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
    top:15,
  },
  text: {
    margintop: 10,
    fontSize: 21,
    top: 12,
    left: 10,
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
    height:22,
    width:22,
    left: 370,
    color:'grey',
    bottom:870,
    borderWidth:2,
    borderRadius:1,
    borderColor:'grey',
 },
 container1:{
   backgroundColor:'#DCDCDC',
 },
  searchicon: {
    position: 'absolute',
    margin: 56,
    marginLeft: 23,
    left: 6,
  },
  circleicon: {
  color:'white',
    backgroundColor:'blue',
    top: 720,
    height:50,
    width:50,
    left: 343,
    borderWidth:1,
    borderRadius:30,
    borderColor:'grey',
  },
  item: {
    fontSize: 18,
    padding: 10,
  },
  container1: {
    flex: 1,
    padding: 15,
    fontWeight: 'bold',
  },
  Container3: {
    position: 'absolute',
    marginLeft: 100,
    padding:6,
  },
  // updatebutton: {
  //   position: 'absolute',
  //   backgroundColor: 'red',
  //   borderRadius: 4,
  //   paddingVertical: 3,
  //   height: 25,
  //   width: 65,
  //   right: 0,
  //   padding: 10,
  //   top: 20,
  // },
  // deletebutton: {
  //   position: 'absolute',
  //   backgroundColor: 'red',
  //   borderRadius: 4,
  //   paddingVertical: 3,
  //   height: 25,
  //   width: 65,
  //   right: 0,
  //   padding: 10,
  //   bottom: 10,
  // },
  image: {
    height: 60,
    width: 60,
    borderRadius: 47,
  },
});
