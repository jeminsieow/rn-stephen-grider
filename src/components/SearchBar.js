import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}  />
      <TextInput 
       value={term} 
       placeholder="Search" 
       style={styles.inputStyle} 
       autoCapitalize="none"
       autoCorrect={false}
       onChangeText={onTermChange}
       onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightgray',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 40,
    color: "black",
    alignSelf: 'center',
    marginHorizontal: 15
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  }
});

export default SearchBar;
