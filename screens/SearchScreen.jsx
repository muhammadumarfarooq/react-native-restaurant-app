import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchInput from "../components/SearchInput";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  
  const onTermSubmit = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term,
          location: "New York",
          limit: 50
        }
      });
      setResult(response.data.businesses);
    } catch (err) {
      setError("Some thing went wrong");
    }
    
  };
  
  return (
    <View>
      <SearchInput
        onTermChange={setTerm}
        onTermSubmit={onTermSubmit}
        term={term}
      />
      {error && <Text>{error}</Text>}
      <Text>You have {result.length} results.</Text>
    </View>
  );
};


export default SearchScreen;

