import { View, Text,TextInput , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Filter = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.Filtercontainer}>
    <Text style ={styles.text}>Role</Text>
    
       <TouchableOpacity style={{flexDirection:'row'}}onPress ={()=> navigation.navigate('RoleList')}>
        <Text style={styles.button}>Select</Text>
        <Text style={styles.selectarrow}> {'>'} </Text>
       </TouchableOpacity>
    
 

      <Text style ={styles.text}>Status</Text>
      <TouchableOpacity style={{flexDirection:'row'}}>
        <Text style={styles.button}>Select</Text>
        <Text style={styles.selectarrow}> {'>'} </Text>
       </TouchableOpacity>
     
      <TouchableOpacity >
        <Text style={styles.clearbutton}>Clear</Text>
        <Text style={styles.applybutton}>Apply</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Filter;
const styles = StyleSheet.create({
Filtercontainer:{
   flex:1,
},
text:{
   fontSize:20,
   marginTop:10,
   marginLeft:20,
},
button:{
borderWidth:1,
borderRadius:20,
height:38,
width:350,
marginLeft:30,
marginTop:6,
paddingLeft:20,
paddingTop:10,
fontSize:16,
},
selectarrow:{
 fontSize:20,
 right:40,
 top:10,
 },
clearbutton:{
  fontSize:20,
  borderWidth:1,
  borderRadius:20,
  height:38,
  width:170,
  paddingLeft:55,
  marginTop:600,
  marginLeft:20,
  paddingTop:5,
},
applybutton:{
  fontSize:20,
  borderWidth:1,
  borderRadius:20,
  height:38,
  width:170,
  bottom:38,
  marginLeft:230,
  paddingLeft:55,
  paddingTop:5,
  elevation:8,
  backgroundColor:'#5F9EA0',
},
});