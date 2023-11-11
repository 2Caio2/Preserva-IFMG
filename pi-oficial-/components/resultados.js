import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { Share } from 'react-native';
import Globais from '../components/Globais';
import { Linking } from 'react-native';
export const DADOS = React.createContext([]);
export default class Resultados extends React.Component {
  total = Globais.total;
  telefone = 0;

  buttonPontuacao = () => {
    Globais.total = 0;
    this.props.navigation.push('Home');
  };

  buttonMenu = () => {
    Globais.total = 0;
    this.props.navigation.push('TelaMenu');
  };

  handleOpenURL = () => {
    this.setState({
      link: Share.share({
        message:
          'Olá, vim compartilhar minha pontuação do Quiz do Preservaê, fiz um total de ' +
          this.total +
          ' ponto(s) :)',
      }),
    });
  };

  mensagem = () => {
    if (this.total == 0) {
      return (
        (<Text> Não foi dessa vez </Text>),
        (
          <Image
            style={styles.imagem}
            source={require('../assets/imgQuiz/circulo0.png')}
          />
        )
      );
    } else if (this.total >= 1 && this.total <= 2) {
      return (
        (<Text> Você está no caminho certo </Text>),
        (
          <Image
            style={styles.imagem}
            source={require('../assets/imgQuiz/circulo25.png')}
          />
        )
      );
    } else if (this.total >= 3 && this.total <= 4) {
      return (
        (<Text> Você está no caminho certo </Text>),
        (
          <Image
            style={styles.imagem}
            source={require('../assets/imgQuiz/circulo50.png')}
          />
        )
      );
    } else if (this.total == 5) {
      return (
        (<Text> Você está no caminho certo </Text>),
        (
          <Image
            style={styles.imagem}
            source={require('../assets/imgQuiz/circulo75.png')}
          />
        )
      );
    } else if (this.total == 6) {
      return (
        (<Text> Uauu, muito bem!! </Text>),
        (
          <Image
            style={styles.imagem}
            source={require('../assets/imgQuiz/circulo100.png')}
          />
        )
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container3}>
          <Image
            style={styles.imagem3}
            source={require('../assets/imgQuiz/onca.png')}
          />
          <Text style={styles.texto3}>Preservaê</Text>
        </View>
        <Text style={styles.texto2}>{this.mensagem()}</Text>
        <View style={styles.container2}>
          <Text style={styles.texto2}>{this.total}</Text>
          <Text style={styles.texto1}>Ponto(s)</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.buttonPontuacao}>
          <View style={styles.button} onPress={this.calcularIMC}>
            <Text style={styles.corText}>Refazer QUIZ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handleOpenURL}>
          <View style={styles.button} onPress={this.calcularIMC}>
            <Text style={styles.corText}>Compartilhar</Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={this.buttonMenu}>
          <View style={styles.button} onPress={this.calcularIMC}>
            <Text style={styles.corText}>Voltar ao Menu</Text>
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
    height: 2000,
  },

  container3: {
    marginTop: 35,
    backgroundColor: 'white',
    alignItems: 'left',
    marginBottom: 20,
  },

  texto2: {
    margintop: 165,
    fontSize: '57px',
  },

  texto1: {
    fontSize: '32px',
    marginTop: 0,
  },

  texto3: {
    fontSize: '22px',
    marginLeft: 100,
    marginTop: -60,
  },

  container2: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: -250,
    marginBottom: 160,
  },

  imagem: {
    width: 220,
    height: 280,
    marginTop: 100,
    marginRight: 220,
    marginLeft: 220,
  },

  imagem3: {
    width: 70,
    height: 90,
    marginTop: 10,
    marginRight: 270,
    marginLeft: 20,
  },

  button: {
    backgroundColor: '#30615D',
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    padding: 1.5,
    height: 40,
    width: 200,
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
});
