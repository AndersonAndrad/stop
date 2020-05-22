import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// styles
import style from './styles';
import { Feather } from '@expo/vector-icons';

export default function Main() {
  const navigation = useNavigation();

  // function
  function navigateToRules() {
    navigation.navigate('Rules');
  }

  return (
    <View style={style.container}>
      <Text style={style.header}>letras sorteadas</Text>
      <View style={style.sorted}>
        <Text style={style.sortedText}>a b c d e f g h i j k</Text>
      </View>
      <View style={style.word}>
        <Text style={style.wordHeaderText}>letra atual</Text>
        <Text style={style.wordSelected}>s</Text>
        <View style={style.sorted}>
          <Text style={style.sortedText}> s </Text>
          <Feather name="arrow-up" size={50} />
        </View>
      </View>
      <View style={style.buttonsContainer}>
        <TouchableOpacity style={style.Button}>
          <Text style={style.buttonText}>sortear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.Button} onPress={navigateToRules}>
          <Text style={style.buttonText}>regras</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
