import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import {color} from '../styles/color';
import { fontsize } from '../styles/fontsize';
import { padding } from '../styles/padding';
import {border} from '../styles/border';
import { margin } from '../styles/margin';
import { size } from '../styles/size';

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
    width: size.biglevel,
    height: size.biglevel,
    borderRadius: border.higher,
    top: 110,
    marginLeft: margin.xxl,
  },
  btnTxtContainer: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginLeft: margin.large,
    paddingTop: padding.larger,
    gap: 20,
  },
  text: {
    textAlign: 'center',
    fontSize:fontsize.l,
  },
  button: {
    borderWidth: border.xs,
    borderRadius:border.xl,
    fontSize: fontsize.s,
    height: size.xl,
    width: size.bigger,
    backgroundColor:color.CadetBlue,
    padding: padding.xxs,
    paddingLeft: padding.mm,
    paddingTop: padding.xxs,
    color: color.white,
  },
});
