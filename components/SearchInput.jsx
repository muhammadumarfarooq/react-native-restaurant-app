import React from 'react';
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";


const SearchInput = ({ onTermChange, onTermSubmit, term }) => {
  return (
    <View style={style.backgroundStyle}>
      <Feather name="search" style={style.iconStyle}/>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={style.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};


const style = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    height: 50,
    backgroundColor: "#ffbb91",
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row"
  },
  iconStyle: {
    fontSize: 25,
    marginHorizontal: 8,
    alignSelf: "center",
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  }
});

export default SearchInput;
