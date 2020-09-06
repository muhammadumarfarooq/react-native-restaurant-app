import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultList = ({ title, results }) => {
  
  return (
    <View>
      <Text style={style.textStyle}>{title}</Text>
      <Text>{results.length}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: "bold"
  }
});


export default ResultList;
