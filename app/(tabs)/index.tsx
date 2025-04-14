import { Image, StyleSheet, Platform } from 'react-native';
import { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, TextInput } from 'react-native';

const chiffre = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('');

  const handlePress = (item) => {
    console.log(item);
    setInputValue(item);
  };
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
       <Text style={{color:'white'}}>{inputValue}</Text>
      <View style={{height:500}}>     
        <FlatList
          data={chiffre}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ margin: 10, padding:20, backgroundColor:'gray', borderRadius:10 }} onPress={() => handlePress(item)}>
              <Text style={styles.chiffre}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          numColumns={3}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          />
      </View>
      <View style={{flexWrap:'wrap', flexDirection:'row', justifyContent:'space-between', width:'100%', padding:10}}>
        <TouchableOpacity style={{backgroundColor:'gray', padding:20, borderRadius:10}} onPress={() => handlePress('C')}>
          <Text style={{ fontSize: 20, color: 'white', marginTop: 20 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'gray', padding:20, borderRadius:10}} onPress={() => handlePress('C')}>
          <Text style={{ fontSize: 20, color: 'white', marginTop: 20 }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'gray', padding:20, borderRadius:10}} onPress={() => handlePress('C')}>
          <Text style={{ fontSize: 20, color: 'white', marginTop: 20 }}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'gray', padding:20, borderRadius:10}} onPress={() => handlePress('C')}>
          <Text style={{ fontSize: 20, color: 'white', marginTop: 20 }}>/</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chiffre: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  }
});
