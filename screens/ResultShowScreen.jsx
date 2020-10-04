import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import yelp from "../api/yelp";

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
  
  return (
    <View>
      <Text>This is result show screen</Text>
      <Text>ID: {id}</Text>
    </View>
  );
};

export default ResultShowScreen;
