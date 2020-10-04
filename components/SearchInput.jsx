import React from 'react';
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import styled from 'styled-components/native';

const StyledViewContainer = styled.View`
  background-color: #979797;
  margin: 10px 15px 10px 15px;
  flex-direction: row;
  height: 50px;
  border-radius: 5px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
`;

const SearchInput = ({ onTermChange, onTermSubmit, term }) => {
  const { iconStyle } = style;
  return (
    <StyledViewContainer>
      <Feather name="search" style={iconStyle}/>
      <StyledTextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </StyledViewContainer>
  );
};


const style = StyleSheet.create({
  iconStyle: {
    fontSize: 25,
    marginHorizontal: 8,
    alignSelf: "center",
  },
});

export default SearchInput;
