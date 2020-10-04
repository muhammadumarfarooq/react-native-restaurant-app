import React from 'react';
import { View, Text } from 'react-native';

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  console.log(id);
  return (
    <View>
      <Text>This is result show screen</Text>
    </View>
  );
};

export default ResultShowScreen;
