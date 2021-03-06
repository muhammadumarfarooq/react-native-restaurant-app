import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import SearchInput from "../components/SearchInput";
import useResults from "../Hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, error, onTermSubmit] = useResults();
  
  const filterResultsByPrice = (price) => {
    // price === "$" || "$$" || "$$$"
    return results.filter(result => result.price === price);
  };
  
  return (
    <>
      <SearchInput
        onTermChange={setTerm}
        onTermSubmit={() => onTermSubmit(term)}
        term={term}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultList results={filterResultsByPrice("$")} title="Cost Effective"/>
        <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier"/>
        <ResultList results={filterResultsByPrice("$$$")} title="Big Spender"/>
      </ScrollView>
    </>
  );
};


export default SearchScreen;

