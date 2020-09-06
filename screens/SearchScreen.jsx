import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchInput from "../components/SearchInput";
import useResults from "../Hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [result, error, onTermSubmit] = useResults();
  return (
    <View>
      <SearchInput
        onTermChange={setTerm}
        onTermSubmit={() => onTermSubmit(term)}
        term={term}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>You have {result.length} results.</Text>
    </View>
  );
};


export default SearchScreen;

