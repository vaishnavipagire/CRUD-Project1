import { View, Text, StyleSheet,TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Filter = () => {
  const navigation = useNavigation()

  const[modalvisible, setModalVisible] = useState(false);

 return (
    <View style={styles.Filtercontainer}>
      // Role
    <Text style ={styles.text}>Role</Text>
     <TouchableOpacity style={{flexDirection:'row'}}
      onPress ={()=> navigation.navigate('Role')}>
      <Text style={styles.button}>Select</Text>
       <Text style={styles.selectarrow}> {'>'} </Text>
       </TouchableOpacity>

    //Status
     <Text style ={styles.text}>Status</Text>
      <TouchableOpacity style={{flexDirection:'row'}} 
      onPress ={()=>setModalVisible(true)}>
       
      <Text style={styles.button}>Select</Text>
        <Text style={styles.selectarrow}> {' >'} </Text>
       </TouchableOpacity>
      
     //Button
     <View style={styles.bottomButtons}>
      <TouchableOpacity >
        <Text style={styles.clearbutton}>Clear</Text>
        <Text style={styles.applybutton}>Apply</Text>
      </TouchableOpacity>
     </View>

     //Modal
     <Modal
      visible={modalvisible}
      transparent={true}
      animationType="slide">
        <View style={styles.modalBackground}>
         <View style={styles.modalContainer}>
       <Text style={styles.modalTitle}>Select Status</Text>

       <TouchableOpacity>
        <Text style={styles.option}>Active</Text>
       </TouchableOpacity>

       <TouchableOpacity>
        <Text style={styles.option}>InActive</Text>
        <Text>InActive</Text>
       </TouchableOpacity>

       <TouchableOpacity>
         {styles.closebtn}
        onPress={()=> setModalVisible(false)}
       </TouchableOpacity>

       <Text style={{color:'blue'}}>close</Text>
        </View>
        </View>
     </Modal>
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
 bottomButtons:{
flexDirection:'row',
justifyContent:'space-between',
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
modalBackground:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:"PINK"
},
modalContainer:{
width:200,
backgroundColor:'white',
padding:20,
borderRadius:20,
elevation:10,
},
modalTitle:{
fontSize:18,
marginBottom:10,
},
option:{
  fontSize:20,
  paddingVertical:7,
},
closebtn:{
  marginTop:15,
}
});