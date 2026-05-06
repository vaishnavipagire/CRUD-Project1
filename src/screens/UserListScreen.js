import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity } from 'react-native';
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
import {color} from '../styles/color';
import { fontsize } from '../styles/fontsize';
import {padding} from '../styles/padding';
import {margin} from '../styles/margin';
import {border} from '../styles/border'
import {size} from '../styles/size';

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
 // Search
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
        <Text style={{ fontSize:fontsize.m, fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ fontSize: fontsize.s }}>{item.role}</Text>
        <Text style={{ fontSize: fontsize.s }}>{item.email}</Text>
        <Text style={{ fontSize: fontsize.s }}>{item.status}</Text>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.navigate('AddUserScreen', { item })}
        style={styles.editBtn}
      >
      <Text style={{ color: color.white}}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity  
        onPress={() => handledelete(item.id)}
        style={styles.deleteBtn}
         >
        <Text style={{ color: color.white }}>delete</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: margin.l,
        }}
      >
        <Text style={styles.text}>All Users</Text>
        <FilterIcon  
          onPress={() => navigation.navigate('Filter')}
          name="filter"
          style={styles.filtericon}
         />
        <Icon 
         onPress={() => navigation.navigate('AddUserScreen')}
          name="plus"
          style={styles.icon}
         />
      </View>

      <View>
        <Searchicon name="search" style={styles.searchicon} />
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
          contentContainerStyle={{ paddingBottom: padding.longest }}
        />
      )
      }
      </View>
      <Squarecircle 
        onPress={() => navigation.navigate('AddUserScreen')}
        name="plus"
        style={styles.circleicon}
        />
    </View>
  );
};
export default UserListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    border: border.xs,
    padding: padding.xxs,
    top: 30,
  },
  Separator: {
    height: size.s,
    backgroundColor:color.grey,
  },
  image: {
    height: size.big,
    width: size.big,
    borderRadius: border.large,
    marginRight: margin.xs,
    marginTop:margin.l,
  },
  text: {
    fontSize:fontsize.xl,
    fontWeight: 'bold',
    color: color.black,
  },
  searchBar: {
    paddingLeft: padding.big,
    paddingVertical:padding.xm,
    borderRadius: border.l,
    fontSize: fontsize.xs,
    color: color.black,
    marginTop: margin.l,
    borderWidth: border.xs,
    borderColor:color.black,
  },
  filtericon: {
    top: 10,
    left: 90,
    fontSize:fontsize.xxl,
  },
  icon: {
    height: size.xs,
    width:  size.xs,
    color: color.grey,
    borderWidth: border.s,
    borderRadius: border.xs,
    borderColor:color.grey,
    top: 10,
    fontSize:fontsize.m,
  },
  searchicon: {
    position: 'absolute',
    left: 8,
    top: 25,
    fontSize:fontsize.searchicon,
  },
  circleicon: {
    position: 'absolute',
    color: color.white,
    backgroundColor: color.blue,
    bottom: 40,
    height: size.large,
    width: size.large,
    right: 5,
    fontSize:fontsize.circleicon,
    borderWidth: border.xs,
    borderRadius: border.xxl,
    borderColor: color.grey,
  },
  item: {
    fontSize:fontsize.m,
    padding:padding.xxm,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: padding.xxl,
    fontWeight: 'bold',
  },
  Container3: {
    padding: padding.s,
  },
  editBtn: {
    position: 'absolute',
    backgroundColor: color.orange,
    borderRadius: border.m,
    paddingVertical: padding.xxs,
    height: size.m,
    width: size.biggest,
    padding:padding.l,
    marginLeft:margin.larger,
    bottom: 70,
  },
  deleteBtn: {
    position: 'absolute',
    backgroundColor:color.red,
    borderRadius: border.m,
    paddingVertical: padding.xxs,
    height: size.m,
    width:size.biggest,
    marginLeft:margin.larger,
    padding: padding.l,
    bottom: 40,
  },
});

