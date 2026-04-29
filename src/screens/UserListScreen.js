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
import FilterIcon from 'react-native-vector-icons/dist/FontAwesome';
import Squarecircle from 'react-native-vector-icons/dist/Feather';
import Searchicon from 'react-native-vector-icons/dist/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import { deleteUser } from '../services/api';
import { getAPIData } from '../services/api';
import { useRoute } from '@react-navigation/native';
import EmptyState from '../components/EmptyState';
import Loader from '../components/Loader';

const UserListScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const selectedRoles = route?.params?.selectedRoles || [];
  const status = route?.params?.status || '';

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [loader, setLoader] = useState(false)

  const loadData = async () => {
    setLoader(true);

    const res = await getAPIData();
    setData(res);
    setFilteredData(res);
    setLoader(false);
  };
  useEffect(() => {
    loadData();
  }, []);

  useEffect(()=>{
    applyFilters();
  },[route?.params, data]);
  
 const applyFilters=()=>{
  let updatedData = data;

  if(selectedRoles.length > 0){
    updatedData = updatedData.filter(item =>
      selectedRoles.includes(item.role)
    );
  }
  if(status){
    updatedData = updatedData.filter(
      item => item.status === status
    );
  }
  setFilteredData(updatedData);
};

  //Delete
  const handledelete = async id => {
    await deleteUser(id);
    loadData();
  };
  //Refresh
  const onRefresh = async => {
    setRefreshing(true);
    loadData();
    setRefreshing(false);
  };

  if(loader ) { 
    return (
      <Loader />
    )
  }
  //Search
  const handleSearch = text => {
    setSearch(text);

    if (text === '') {
      applyFilters();
      return;
    }
    const filtered = filteredData.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const handleClear = ()=> {
    setSearch('');
    setFilteredData(data);
  }

  //Item seperate
  const Separator = () => <View style={styles.Separator} />;

  //Item UI
  const renderItem = ({ item }) => (
    <View style={styles.container1}>
      <Image source={{ uri: item.avatar }} style={styles.image} />
      <View style={styles.Container3}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ fontSize: 16 }}>{item.role}</Text>
        <Text style={{ fontSize: 16 }}>{item.email}</Text>
        <Text style={{ fontSize: 16 }}>{item.status}</Text>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.navigate('AddUserScreen', { item })}
        style={styles.editBtn}
      >
      <Text style={{ color: 'white' }}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity  
        onPress={() => handledelete(item.id)}
        style={styles.deleteBtn}
         >
        <Text style={{ color: 'white' }}>delete</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}
      >
        <Text style={styles.text}>All Users</Text>
        <FilterIcon  
          onPress={() => navigation.navigate('Filter')}
          name="filter"
          size={27}
          style={styles.filtericon}
         />
        <Icon 
         onPress={() => navigation.navigate('AddUserScreen')}
          name="plus"
          size={17}
          style={styles.icon}
         />
      </View>

      <View>
        <Searchicon name="search" size={30} style={styles.searchicon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search users"
          value={search}
          onChangeText={handleSearch}
        />
      </View>

       <View>
        {filteredData.length === 0 ?(
          <EmptyState onClear={handleClear}
          />
        ):
      (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      )
      }
      <Loader/>

      </View>
      <Squarecircle 
        onPress={() => navigation.navigate('AddUserScreen')}
        name="plus"
        size={45}
        style={styles.circleicon}
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
    top: 30,
  },
  Separator: {
    height: 1,
    backgroundColor: 'grey',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 47,
    marginRight: 10,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
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
  filtericon: {
    top: 10,
    left: 90,
  },
  icon: {
    height: 22,
    width: 22,
    color: 'grey',
    borderWidth: 2,
    borderRadius: 1,
    borderColor: 'grey',
    top: 10,
  },
  searchicon: {
    position: 'absolute',
    left: 8,
    top: 25,
  },
  circleicon: {
    position: 'absolute',
    color: 'white',
    backgroundColor: 'blue',
    bottom: 40,
    height: 50,
    width: 50,
    right: 5,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'grey',
  },
  item: {
    fontSize: 18,
    padding: 10,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 15,
    fontWeight: 'bold',
  },
  Container3: {
    padding: 6,
  },
  editBtn: {
    position: 'absolute',
    backgroundColor: 'orange',
    borderRadius: 4,
    paddingVertical: 3,
    height: 25,
    width: 65,
    right: 0,
    padding: 12,
    bottom: 50,
  },
  deleteBtn: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 4,
    paddingVertical: 3,
    height: 25,
    width: 65,
    right: 0,
    padding: 12,
    bottom: 17,
  },
});

