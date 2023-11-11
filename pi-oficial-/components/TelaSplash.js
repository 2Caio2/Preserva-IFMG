import * as React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Button,
  changeStyle,
  BackHandler,
} from 'react-native';
import { DADOS } from '../App';
import { useState } from 'react';

export default class TelaSplash extends React.Component {
  botaoComecar = () => {
    this.props.navigation.push('TelaInicial');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.linha}>
          <Image
            style={styles.logo}
            source={require('../assets/oncaBranca.png')}
          />
          <Text style={styles.preservae}>Preservaê</Text>
        </View>

        <TouchableOpacity style={styles.botao} onPress={this.botaoComecar}>
          <View>
            <Text style={styles.corTexto}> Iniciar </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.ifzinho}>IFMG-RN</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#30615D',
    height: '100%',
  },

  logo: {
    height: 89.43,
    width: 100,
    marginTop: -10,
    marginLeft: 20,
  },

  linha: {
    flexDirection: 'row',
    marginTop: 350,
  },

  preservae: {
    marginBottom: 50,
    fontSize: 60,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: 'white',
  },

  corTexto: {
    color: '#30615D',
    fontSize: 25,
    fontFamily: 'Avenir',
  },

  botao: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 120,
    borderRadius: 60,
  },

  ifzinho: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    marginTop: 170,
    color: 'white',
  },
});
