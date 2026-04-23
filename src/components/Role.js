import { View, Text, TouchableOpacity ,  StyleSheet} from 'react-native'
import React from 'react'
 import Icon from 'react-native-vector-icons/dist/Entypo';
// import Icons from 'react-native-vector-icons/dist/AntDesign';

const Role = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{color:'grey'}}>
        <Text style={styles.roletext}>Admin</Text>
         <Text style={styles.roletext}>Manager</Text>
          <Text style={styles.roletext}>Fronted Developer</Text>
          <Text style={styles.roletext}>Backend Developer</Text>
           <Icon name="circle" size={27} style={styles.circleicon}/>
           {/* <Icon name="check-circle" size={27} style={styles.checkicon}/> */}
      </TouchableOpacity>
      
      <TouchableOpacity >
        <View>
          <Text style={styles.filterbutton}>Clear filter</Text>
          <Text style={styles.confirmbutton}>Confirm</Text>
        </View>
       </TouchableOpacity>
     </View>
  )
}
export default Role;
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
roletext:{
fontSize:20,
borderWidth:1,
height:38,
width:390,
color:'black',
borderRadius:20,
marginLeft:10,
marginTop:30,
paddingLeft:12,
paddingTop:5,
backgroundColor:'#79afb1',
},
circleicon:{
  bottom:233,
  left:360,
  fontSize:24,
},
// checkicon:{
//  top:40,
//  left:360,
//  fontSize:20,
// },
filterbutton:{
  fontSize:20,
  borderWidth:1,
  borderRadius:20,
  height:38,
  width:172,
  paddingLeft:35,
  marginTop:470,
  marginLeft:20,
  paddingTop:5,
},
confirmbutton:{
  fontSize:20,
  borderWidth:1,
  borderRadius:20,
  height:38,
  width:172,
  bottom:38,
  marginLeft:230,
  paddingLeft:50,
  paddingTop:5,
  elevation:8,
  backgroundColor:'#5F9EA0',
  },
})