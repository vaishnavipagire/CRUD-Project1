import { Text, ActivityIndicator ,StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../styles/color';
import { fontsize } from '../styles/fontsize';

const Loader = () => {
  return (
    <>
      <ActivityIndicator style={{color:color.blue, marginTop:410}} size="large"/>
      <Text style={styles.text}>Plase wait </Text>
    </>
  );
};
export default Loader;
const styles = StyleSheet.create({
  text:{
  fontSize:fontsize.l,
  textAlign:'center',
  },
})

