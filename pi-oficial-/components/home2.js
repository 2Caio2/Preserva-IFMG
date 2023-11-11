import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Button,
  changeStyle,
  BackHandler,
} from 'react-native';
import Globais from '../components/Globais';
import { DADOS } from '../App';
import { useState } from 'react';

export default class Home2 extends React.Component {
  ponto = Globais.ponto;
  total = Globais.total;

  buttonPontuacao = () => {
    Globais.total = Globais.total + 1;
    this.props.navigation.push('Home3');
  };

  buttonNavegacao = () => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    this.props.navigation.push('Home3');
  };

  constructor(props) {
    super(props);
    props.navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Pontuação:{this.total}</Text>
        <Text style={styles.text}> </Text>
        <View style={styles.container2}>
          <Image
            style={styles.imagem}
            source={require('../assets/imgQuiz/IFonca.png')}
          />
          <Image
            style={styles.imagem2}
            source={require('../assets/imgQuiz/balao2.png')}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.buttonPontuacao}>
          <View style={styles.button} onPress={this.calcularIMC}>
            <Text style={styles.corText}>
              Área do território por onde percorre um rio principal e seus
              afluentes.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.buttonNavegacao}>
          <View style={styles.button}>
            <Text style={styles.corText}>Uma barragem.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.buttonNavegacao}>
          <View style={styles.button}>
            <Text style={styles.corText}>
              Um conjunto de lagos artificiais que deságuam em um rio.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#30615D',
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    padding: 1.5,
    height: 70,
    width: 300,
    borderRadius: 35,
    marginBottom: 45,
  },

  corText: {
    color: 'white',
    marginRight: 25,
    marginLeft: 25,
    marginTop: 8,
    marginBottom: 3,
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  imagem: {
    width: 220,
    height: 240,
    marginTop: 190,
    marginRight: 220,
    marginLeft: 1,
  },

  imagem2: {
    marginBottom: 140,
    marginRight: -160,
    alignContent: 'right',
    marginTop: -390,
    width: 400,
    height: 250,
  },

  container2: {
    backgroundColor: 'white',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 50,
    width: 2000,
  },
});
