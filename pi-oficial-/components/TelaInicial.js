import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { DADOS } from '../App';

export default class Welcome extends React.Component {
  buttonCadastrar = () => {
    this.props.navigation.push('Cadastro');
  };

  buttonEntrar = () => {
    this.props.navigation.push('Login');
  };

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.imgRetangulo}
          source={require('../assets/retangulo.png')}
        />
        <Image
          style={styles.imgBacia}
          source={require('../assets/Mapa.png')}
        />

        <Text style={styles.titulo}> Bem-Vindo(a) </Text>

        <Text style={styles.text}>
          {' '}
          Conheça mais sobre a Bacia Hidrográfica Ribeirão do Onça!{' '}
        </Text>

        <TouchableOpacity style={styles.botao} onPress={this.buttonEntrar}>
          <View>
            <Text style={styles.corTexto}> Entrar </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={this.buttonCadastrar}>
          <View>
            <Text style={styles.corTexto}> Cadastrar </Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: 850,
  },

  imgRetangulo: {
    height: 401,
    width: 390,
  },

  imgBacia: {
    height: 290,
    width: 250,
    marginTop: -320,
    marginLeft: 70,
  },

  titulo: {
    marginTop: 70,
    marginBottom: 100,
    fontSize: 50,
    fontFamily: 'Avenir',
    textAlign: 'center',
  },

  text: {
    margin: 30,
    marginBottom: 55,
    marginTop: -70,
    textAlign: 'center',
    fontSize: 20,
  },

  botao: {
    alignItems: 'center',
    backgroundColor: '#30615D',
    padding: 10,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 10,
    borderRadius: 60,
  },

  corTexto: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Avenir',
  },
});
