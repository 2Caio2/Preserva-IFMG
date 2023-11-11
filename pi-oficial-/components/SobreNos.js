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
  ScrollView,
} from 'react-native';
import { DADOS } from '../App';
import { useState } from 'react';

export default class comecaQuiz extends React.Component {
  buttonNavegacao = () => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    this.props.navigation.push('Home1');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.imagem2}
            source={require('../assets/onda.png')}
          />
          <Text style={styles.text}>Sobre Nós</Text>
          <Text style={styles.text2}>
            Somos alunos do Instituto Federal de Educação, Ciência e Tecnologia
            de Minas Gerais - Campus Ribeirão das Neves, integrantes da turma de
            3º ano ténico integrado de Informática.{' '}
          </Text>
          <View>
            <Image
              style={styles.imagem}
              source={require('../assets/fotinha.png')}
            />
          </View>
          <Text style={styles.text3}>
            O grupo é composto por Caio Menezes, Daniele Barros, Gabriela
            Drumond, João Pedro Costa, Julia Alvaro, Júlia Gabriela e Melissa
            Alanis. Juntos, elaboramos um projeto de pesquisa incorporado em um
            geogame sobre a Bacia Ribeirão do Onça, objetivando a
            conscientização e mobilização social por parte da população.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
  },

  text: {
    fontSize: 50,
    marginBottom: 44,
    marginTop: -470,
    fontFamily: 'Avenir',
    color: 'white',
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 20,
    marginBottom: 14,
    marginTop: 40,
    fontFamily: 'Avenir',
    margin: 20,
    textAlign: 'justify',
  },

  text3: {
    fontSize: 20,
    marginBottom: 14,
    fontFamily: 'Avenir',
    margin: 20,
    textAlign: 'justify',
  },

  imagem: {
    width: 350,
    height: 250,
    borderRadius: 30,
  },

  imagem2: {
    height: 500,
    marginBottom: 28,
    marginRight: -130,
  },
});
