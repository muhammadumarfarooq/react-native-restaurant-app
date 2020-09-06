import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultList = ({ title, results }) => {
  
  return (
    <View>
      <Text style={style.textStyle}>{title}</Text>
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={results}
        renderItem={({ item }) => <Text>{item.name}</Text>}
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
