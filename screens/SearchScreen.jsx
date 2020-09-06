import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchInput from "../components/SearchInput";
import useResults from "../Hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, error, onTermSubmit] = useResults();
  
  const filterResultsByPrice = (price) => {
    return results.filter(result => result.price === price);
  };
  
  return (
    <View>
      <SearchInput
        onTermChange={setTerm}
        onTermSubmit={() => onTermSubmit(term)}
        term={term}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>You have {results.length} results.</Text>
      
      <ResultList results={filterResultsByPrice("$")} title="Cost Effective"/>
      <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier"/>
      <ResultList results={filterResultsByPrice("$$$")} title="Big Spender"/>
    
    </View>
  );
};


export default SearchScreen;

