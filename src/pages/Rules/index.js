import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import style from './styles';
import { Feather, MaterialIcons } from '@expo/vector-icons';

export default function Rules() {
  const navigation = useNavigation();

  const values = ['A', 'B', 'C', 'D'];

  function navigationToMain() {
    navigation.navigate('Main');
  }

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.title}>Regras</Text>
        <TouchableOpacity style={style.tittleIcon}>
          <Text>
            <MaterialIcons name="invert-colors" size={30} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={style.littleTitle}>Letras que devem ser sorteadas</Text>
      <View style={style.listContainer}>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>B</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>E</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>F</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>H</Text>
        </TouchableOpacity>
      </View>
      <View style={style.listContainer}>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>I</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>J</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>N</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>O</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>P</Text>
        </TouchableOpacity>
      </View>
      <View style={style.listContainer}>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>Q</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>R</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>T</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>U</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>V</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>Y</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>W</Text>
        </TouchableOpacity>
      </View>
      <View style={style.listContainer}>
        <TouchableOpacity style={style.wordContainer}>
          <Text style={style.listWords}>Z</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={style.littleTitle}>Letras selecionadas</Text>
      </View>
      <View style={style.wordsContainer}>
        <Text style={style.word}>{values}</Text>
      </View>
      <View style={style.buttonsContainer}>
        <TouchableOpacity style={style.Button} onPress={navigationToMain}>
          <Text style={style.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.Button}>
          <Text style={style.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
