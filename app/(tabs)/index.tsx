import { Image, StyleSheet, Platform } from 'react-native';
import { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const chiffre = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (item) => {
    console.log(item);
    // setInputValue(item);
    setInputValue((prev) => {
      if (item === 'C') {
        return prev.slice(0, -1);
      }
      return prev + item;
    }
    );
    if (item === '=') {
      try {
        const evalResult = eval(inputValue);
        setResult(evalResult);
        setInputValue(evalResult.toString());
      } catch (error) {
        console.error('Error evaluating expression:', error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ height: 400, width: '100%', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'white', fontSize:50}}>{inputValue}</Text>
      </View>
    <View style={{ height: '100%', width: '100%', flexDirection:'row' }}>
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
      <View style={{flexWrap:'wrap', flexDirection:'column', width:'100%', padding:10, height:400}}>
        <TouchableOpacity style={{backgroundColor:'gray', padding:10, borderRadius:10, margin:10}} onPress={() => handlePress('+')}>
          <Text style={{ fontSize: 40, color: 'white'}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'gray', padding:10, borderRadius:10, margin:10}} onPress={() => handlePress('-')}>
          <Text style={{ fontSize: 40, color: 'white'}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'gray', padding:10, borderRadius:10, margin:10}} onPress={() => handlePress('*')}>
          <Text style={{ fontSize: 40, color: 'white'}}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'gray', padding:10, borderRadius:10, margin:10}} onPress={() => handlePress('/')}>
          <Text style={{ fontSize: 40, color: 'white'}}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'gray', padding:10, borderRadius:10, margin:10}} onPress={() => handlePress('=')}>
          <Text style={{ fontSize: 40, color: 'white'}}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'gray', padding:10, borderRadius:10, margin:10}} onPress={() => handlePress('C')}>
          <Ionicons name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chiffre: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  }
});
