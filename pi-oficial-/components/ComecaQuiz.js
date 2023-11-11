import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';

export default class comecaQuiz extends React.Component {
  buttonNavegacao = () => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    this.props.navigation.push('Home');
  };

  buttonComecar = () => {
    this.props.navigation.push('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imagem} source={require('../assets/onda.png')} />
        <Image style={styles.imagem1} source={require('../assets/Quiz.png')} />
        <Text style={styles.text}>
          {' '}
          Realize o formulário e teste seus conhecimentos!{' '}
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.buttonComecar}>
          <View>
            <Text style={styles.corText}> Começar Quiz </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 800,
  },

  text: {
    margin: 30,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 25,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#30615D',
    padding: 10,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 80,
    borderRadius: 60,
  },

  corText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Avenir',
  },

  imagem: {
    height: 500,
    marginLeft: -60,
  },

  imagem1: {
    width: 400,
    height: 150,
    marginLeft: 7,
    marginTop: -200,
  },
});
