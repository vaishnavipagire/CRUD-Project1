import { Text, ActivityIndicator } from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <>
      <ActivityIndicator size="large" color="blue" />
      <Text style={{fontSize:20,textAlign:'center'}}>Plase wait </Text>
    </>
  );
};
export default Loader;
