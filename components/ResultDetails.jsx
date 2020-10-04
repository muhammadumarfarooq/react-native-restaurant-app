import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetails = ({ result }) => {
  const { image_url, rating, name, review_count } = result;
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: image_url }}/>
      <Text style={style.name}>{name}</Text>
      <Text>
        {rating} Stara, {review_count} Reviews
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  }
});

export default ResultDetails;
