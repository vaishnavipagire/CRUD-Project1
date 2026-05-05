import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import {color} from '../styles/color';
import { fontsize } from '../styles/fontsize';

const EmptyState = ({ onClear }) => {
  return (
    <View style={styles.continer}>
      <View>
        <Image style={styles.image} source={require('../assets/No Data.jpg')} />
      </View>

      <View style={styles.btnTxtContainer}>
        <Text style={styles.text}> No Data Found </Text>
        <TouchableOpacity onPress={onClear}>
          <Text style={styles.button}> Clear parameters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EmptyState;
const styles = StyleSheet.create({
  continer: {},
  image: {
    width: 240,
    height: 240,
    borderRadius: 110,
    top: 110,
    marginLeft: 100,
  },
  btnTxtContainer: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginLeft: 130,
    paddingTop: 120,
    gap: 20,
  },
  text: {
    textAlign: 'center',
    fontSize:fontsize.l,
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    fontSize: fontsize.s,
    height: 32,
    width: 170,
    backgroundColor:color.CadetBlue,
    padding: 3,
    paddingLeft: 20,
    paddingTop: 3,
    color: color.white,
  },
});
