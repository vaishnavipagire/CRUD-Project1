import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const EmptyState = () => {
  return (
    <View style={styles.continer}>
      <View>
          <Image  style={styles.image} 
        source={require('../assets/No Data.jpg')} />
        </View>
      <Text style={styles.text}> No data found. </Text>
      <TouchableOpacity>
         <Text style={styles.button}>Clear parameters</Text>
      </TouchableOpacity>
        </View>
 );
};
export default EmptyState;
const styles = StyleSheet.create({
continer:{
  flex:1,
},
image: {
    width: 220,
    height: 220,
    borderRadius:100,
    top:100,
    marginLeft:100,
  },
text:{
fontSize:20,
top:340,
marginLeft:140,
},
button:{
  borderWidth:1,
  borderRadius:20,
  fontSize:17,
  height:32,
  width:170,
  top:350,
  backgroundColor:'#008B8B',
  marginLeft:130,
  padding:3,
  paddingLeft:20,
  paddingTop:3,
  color:'white',
}
})
