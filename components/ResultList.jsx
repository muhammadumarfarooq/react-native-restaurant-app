import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from "./ResultDetails";

const ResultList = ({ title, results, navigation }) => {
  
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={results}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("ResultShow")}>
            <ResultDetails navigation={navigation} result={item}/>
          </TouchableOpacity>
        )
        }
      />
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});


export default ResultList;
