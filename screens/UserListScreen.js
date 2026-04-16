import React,{ useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import Squarecircle from 'react-native-vector-icons/dist/Feather';
import Searchicon from 'react-native-vector-icons/dist/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import {  deleteUser} from '../services/api';
import { getAPIData } from '../services/api';

 const UserListScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async ()=>{
    const res = await getAPIData();
    setData(res);
  }
  useEffect(() => {
    loadData();
  }, []);

  const handledelete  = async(id)=>{
         await deleteUser(id);
            loadData();
       };
   const onRefresh = () => {
    setRefreshing(true);
    getAPIData(); 
    setRefreshing(true);
  };

  //Refresh
  const handleSearch = (text) => {
    setSearch(text);
    
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };
     //Item UI
  const renderItem = ({ item }) => (
      <View style={styles.container1}>
      <Image source={{ uri: item.avatar }} style={styles.image} />
      <View style={styles.Container3}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ fontSize: 16 }}>{item.role}</Text>
        <Text style={{ fontSize: 16 }}>{item.email}</Text>
      </View>

      <TouchableOpacity
        style={styles.editBtn}
        onPress={()=>navigation.navigate('AddUserScreen',{item})}>
        <Text style={{ color: 'white' }}>Edit</Text>
      </TouchableOpacity>

       <TouchableOpacity
        style={styles.deleteBtn}
        onPress={()=>handledelete(item.id)}>
        <Text style={{ color: 'white' }}>delete</Text>
      </TouchableOpacity>
 </View>
)
  return(
    <View style={styles.container}>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20}}>
        <Text style={styles.text}>All Users</Text>
        <Icon name="plus" size={17} style={styles.icon}
        onPress={() => navigation.navigate('AddUserScreen')}/>
      </View>
      <View>
          <Searchicon name="search" size={30} style={styles.searchicon} />
          <TextInput style={styles.searchBar} placeholder="Search users"
            value={search} onChangeText={handleSearch}/>
      </View>
   
       <View>
       <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshing={refreshing}
        onRefresh={onRefresh}
       />
      </View>
      <Squarecircle name="plus" size={45} style={styles.circleicon}
        onPress={() => navigation.navigate('AddUserScreen')}/>
      </View>
  );
}
export default UserListScreen;
const styles = StyleSheet.create({
  container:{
    flex: 1,
    border: 1,
    padding: 3,
    top:30,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 47,
    marginRight:10,
  },
  text: {
     fontSize: 21,
     fontWeight: 'bold',
     color:"black"
  },
  searchBar: {
    paddingLeft: 40,
    paddingVertical: 8,
    borderRadius: 6,
    fontSize: 15,
    color: 'black',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  icon: {
    height:22,
    width:22,
    color:'grey',
    borderWidth:2,
    borderRadius:1,
    borderColor:'grey',
    top:10,
  },
  searchicon: {
    position: 'absolute',
    left: 8,
    top:25,
   },
  circleicon: {
    position:"absolute",
    color:'white',
    backgroundColor:'blue',
    bottom:40,
    height:50,
    width:50,
    right:5,
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
    flexDirection:"row",
    alignItems:"flex-start",
    padding: 15,
    fontWeight: 'bold',
  },
  Container3: {
    padding:6,
  },
  editBtn:{
    position:'absolute',
    backgroundColor:'orange',
    borderRadius: 4,
    paddingVertical: 3,
    height: 25,
    width: 65,
    right: 0,
    padding: 12,
    bottom:50,
   },
  deleteBtn:{
    position:'absolute',
    backgroundColor:'red',
    borderRadius: 4,
    paddingVertical: 3,
    height: 25,
    width: 65,
    right: 0,
    padding: 12,
    bottom: 17,
  },
  });
