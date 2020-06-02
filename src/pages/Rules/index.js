import React from 'react';
import { View, Text, TouchableHighlight, Button } from 'react-native';

import style from './styles';
import { Feather, MaterialIcons } from '@expo/vector-icons';

export default function Rules() {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.title}>Regras</Text>
        <TouchableHighlight style={style.tittleIcon}>
          <Text>
            <MaterialIcons name="invert-colors" size={30} color="black" />
          </Text>
        </TouchableHighlight>
      </View>
      <Text style={style.littleTitle}>Letras que devem ser sorteadas</Text>
      <View style={style.listContainer}>
        <Button title="A" style={style.listWords} />
        <Button title="B" style={style.listWords} />
        <Button title="C" style={style.listWords} />
        <Button title="D" style={style.listWords} />
        <Button title="E" style={style.listWords} />
        <Button title="F" style={style.listWords} />
        <Button title="G" style={style.listWords} />
        <Button title="H" style={style.listWords} />
        <Button title="I" style={style.listWords} />
        <Button title="J" style={style.listWords} />
        <Button title="K" style={style.listWords} />
      </View>
      <View style={style.listContainer}>
        <Button title="L" style={style.listWords} />
        <Button title="M" style={style.listWords} />
        <Button title="N" style={style.listWords} />
        <Button title="O" style={style.listWords} />
        <Button title="P" style={style.listWords} />
        <Button title="Q" style={style.listWords} />
        <Button title="R" style={style.listWords} />
        <Button title="S" style={style.listWords} />
        <Button title="T" style={style.listWords} />
        <Button title="U" style={style.listWords} />
        <Button title="V" style={style.listWords} />
      </View>
      <View style={style.listContainer}>
        <Button title="X" style={style.listWords} />
        <Button title="W" style={style.listWords} />
        <Button title="Y" style={style.listWords} />
        <Button title="Z" style={style.listWords} />
      </View>
      <Text style={style.word}>M</Text>
      <View style={style.buttonContainer}>
        <TouchableHighlight style={style.button}>
          <Text style={style.textButton}>salvar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
