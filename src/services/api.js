// import { View,Text, FlatList,Image,StyleSheet } from 'react-native';
// import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
//Get API
  //  export const AllUsers = async () => {
  //     try {
  //       const result = await axios.get(
  //         'https://69c275e57518bf8facbe6b7a.mockapi.io/users/user'
  //       );
  //       return result.data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
// const api = () => {
//      const [myData, setMyData] = useState([]);
//        useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get(
//           'https://69c275e57518bf8facbe6b7a.mockapi.io/users/user'
//         );
//         setMyData(result.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
    
//   fetchData();
//   }, []);

//   const renderItem = ({ item }) => (
//      <View style={styles.container}>
//       <Image source={{uri:item.avatar}} style={styles.image} />
//      <Text>{item.name}</Text>
//       <Text>{item.email}</Text>
//       <Text>{item.phone}</Text>
//     </View>
//   );
// return (
//     <View style={styles.list}>
//        <FlatList
//         data={myData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         />
//     </View>
//  );
// };
// const styles = StyleSheet.create({
//   container:{
//         height:13,
//         // flex:1,
//        },
// list:{
//    flex:1,
//    height:'92%',
//    flexGrow:0,
//   //  paddingHorizontal:20,
// },
//   image: {
//     top:50,
//     width: 110,
//     height: 110,
//     borderRadius:50,
//     marginLeft: 10,
//   },
//     });
export default api;
