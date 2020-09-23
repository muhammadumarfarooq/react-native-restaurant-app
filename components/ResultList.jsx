import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetails from "../screens/ResultDetails";

const ResultList = ({ title, results }) => {
  
  return (
    <View>
      <Text style={style.textStyle}>{title}</Text>
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={results}
        renderItem={({ item }) => <ResultDetails result={item}/>}
      />
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
