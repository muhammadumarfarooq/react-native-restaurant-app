import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import yelp from "../api/yelp";
import { FlatList, Image, StyleSheet } from "react-native";


const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  
  useEffect(() => {
    getResult(id);
  }, []);
  
  if ( !result )
    return <Text>Loading...</Text>;
  
  const { name, photos } = result;
  console.log(photos);
  return (
    <View>
      <Text>{name}</Text>
      <FlatList
        data={photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }}/>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200
  }
});

export default ResultShowScreen;
