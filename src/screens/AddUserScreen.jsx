import { useState , useRef } from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,TextInput,Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';

const AddUserScreen = ({navigation}) => {
  
   const [text, setText ] = useState();
   const[selectedItem,setSelectedItem] = useState('admin');
  //  const pickerRef = useRef();
   const route = useRoute();
   console.log(route.params);
   
   return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('UserListScreen')}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>Add/EditUser</Text>
        <TouchableOpacity>
          <Text style={styles.text2}>save</Text>
        </TouchableOpacity>
         </View>
    
     <View>
       <TouchableOpacity>
          <View style={styles.photo}>
           <Image source={require('../assets/Imageicon.jpg')} 
           style={styles.imageicon}/>
           <View styles={styles.photo1}>
             <Text style={{color:'blue'}}>Edit photo</Text>
           </View>
          {/* <Text style={{color:'blue'}}>Edit photo</Text> */}
         </View>
         </TouchableOpacity>
    </View>
      
      <View style={styles.container1}>
      <Text style={{fontSize:18}}>Full Name</Text>
      <TextInput style={styles.textinput} 
       placeholder="Enter your name" 
      />
      
      <Text style={{fontSize:18}}>Email</Text>
      <TextInput style={styles.textinput} 
      placeholder="Enter your email" 
       />

      <View style={styles.container2}>
       <Text style={{fontSize:19}}>Role</Text>
      <View style={{left:150}}>
      <View style={styles.roleDropdownList}>
      <Picker 
      // ref={pickerRef}
      selectedValue={selectedItem}
      onValueChange={(itemValue)=> setSelectedItem(itemValue)}>
        <Picker.Item label='Admin' value='Admin'/>
         <Picker.Item label='Manager' value='Manager'/>
         <Picker.Item label='Administrator' value='Administrator'/>
      </Picker>
      </View>
      </View>
       </View>

     <View>
       <View style={styles.container3}>
      <Text style={{fontSize:18,}}>Phone Number</Text>
      <View style={{position:'absolute',left:369}}>
      <TextInput style={styles.textinput2}
      placeholder='+9124567899'/>
      </View>
      </View>

      <View style={styles.container4}>
     <Text style={{fontSize:18}}>Status</Text>
       <View style={{position:'absolute',left:226}}>
      <TextInput style={styles.textinput3}/>
      <View style={styles.statusDropdownList}>
      <Picker 
      // ref={pickerRef}
      selectedValue={selectedItem}
      onValueChange={(itemValue)=> setSelectedItem(itemValue)}>
        <Picker.Item label='Active' value='Active'/>
         <Picker.Item label='Inactive' value='Inactive'/>
         <Picker.Item label='All' value='All'/>
      </Picker>
      </View>
       </View>
      </View>
     </View>
    </View>
   
  <TouchableOpacity style={styles.deletebutton}>
        <Text style={{color:'white'}}>Delete User</Text>
        </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
        //  flex:1,
        padding:20,
  },
  header:{
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop:0,
  },
  text: {
    paddingLeft:0,
    paddingRight:100,
    fontSize: 20,
  },
  text1: {
     paddingRight:40,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text2:{
      fontSize:20,
      backgroundColor:'blue',
      color:'white',
       paddingHorizontal:10,
      borderRadius:4,
  },
  // container1:{
  //   fontSize:20,
  //   paddingVertical:10,
  //  },
  photo:{
       borderWidth: 1,
       borderColor: 'black',
       borderRadius: 4,
       padding:5,
      marginLeft:130,
      marginRight:160,
      marginTop:10,
      justifyContent:'center',
       
 },
    imageicon:{
       width: 100,
       height: 100, 
       borderRadius:4
    },
    photo1:{
       borderWidth: 1,
       borderColor: 'black',
       borderRadius: 4,
       padding:5,
      marginLeft:130,
      marginRight:160,
      marginTop:10,
      justifyContent:'center',
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
  container1:{
    paddingVertical:1,
    //  margin:0,
   },
  textinput:{
    fontSize:13,
    borderWidth: 1,
    borderColor:'black',
    borderRadius: 4,
    padding:6,
    height:32,
    width:360, 
    flexDirection:'row',
  },
  container2:{
      //width:200,
      flexWrap:"wrap",
      flexDirection:"row",
      marginLeft:10,
      marginTop:10
   },
  roleDropdownList:{
     borderWidth:1,
     width:161,
     height:39 ,
     marginBottom:4,
     borderRadius:4,
     padding:2,
  },
 container3:{
      width:200,
      flexWrap:"wrap",
      flexDirection:"row",
      margin:0,
      padding:5,
      },
 textinput2:{
    position:'absolute',
    right:2,
    borderWidth: 1,
    borderColor:'black',
    borderRadius:4,
    margin:8,
    padding:6,
    height: 30,
    width:190,
    flexDirection:"row",
},
  container4:{
      width:200,
      flexWrap:"wrap",
      flexDirection:"row",
      padding:15,
  },
textinput3:{
  position:'absolute',
    borderWidth: 1,
    borderColor:'black',
    borderRadius:4,
    padding:10,
    margin:13,
    height:30,
    width:120,
    paddingVertical:4,
   flexWrap:"wrap",
   flexDirection:"row",
 },
 statusDropdownList:{
     position:'absolute',
     height:110,
     width:140,
     margin:2,
     padding:1,
    paddingHorizontal:8,
 },
 container5:{
      flex:1,
 },
deletebutton:{
         position:'absolute',
         backgroundColor:'red',
         padding:10,
         right:40,
         borderRadius:4,
         fontSize:20,
         paddingVertical:6,
        paddingHorizontal:130,
        marginTop:850,
        Color:'white',
 },
 });
export default AddUserScreen;
