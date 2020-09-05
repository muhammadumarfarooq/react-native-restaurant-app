import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchInput from "../components/SearchInput";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  
  const onTermSubmit = () => {
    console.log("term submitted!");
  };
  
  return (
    <View>
      <SearchInput
        onTermChange={setTerm}
        onTermSubmit={onTermSubmit}
        term={term}
      />
      
      <Text>{term}</Text>
    </View>
  );
};


export default SearchScreen;

