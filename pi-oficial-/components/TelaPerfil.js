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
  buttonEditar = () => {
    this.props.navigation.push('EditarUser');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.onda} source={require('../assets/onda.png')} />
        <Text style={styles.titulo}> @User </Text>

        <Image
          style={styles.usuario}
          source={require('../assets/IconPerfil.png')}
        />

        <TouchableOpacity style={styles.botao} onPress={this.buttonEditar}>
          <View>
            <Text style={styles.corTexto}> Editar Perfil </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
  },

  onda: {
    height: 500,
    marginLeft: -60,
  },

  titulo: {
    marginTop: -440,
    marginBottom: 100,
    fontSize: 50,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  usuario: {
    marginLeft: 120,
    height: 200,
    width: 150,
  },

  botao: {
    alignItems: 'center',
    backgroundColor: '#30615D',
    padding: 10,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 100,
    borderRadius: 60,
  },

  corTexto: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Avenir',
  },
});
