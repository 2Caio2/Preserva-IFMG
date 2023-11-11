import * as React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { DADOS } from '../App';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.route.params == null) {
      this.state = {
        senhaNova: null,
        confirmaSenha: null,
      };
    } else {
      for (i = 0; i < global.dados.length; i++) {
        if (global.dados[i].id == this.props.route.params.id) {
          this.state = {
            senhaNova: global.dados[i].senhaNova,
            confirmaSenha: global.dados[i].confirmaSenha,
          };
        }
      }
    }
  }

  setSenhaNova = (text) => {
    this.setState({
      senhaNova: text,
    });
  };

  setConfirmaSenha = (text) => {
    this.setState({
      confirmaSenha: text,
    });
  };

  buttonRecuperar = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../assets/oncaLaranja.png')}
          />
          <Text style={styles.texto}>Recuperar sua senha</Text>
          <TextInput
            onChangeText={this.setSenhaNova}
            value={this.state.senhaNova}
            style={styles.entrada}
            placeholder={'Nova senha'}
            placeholderTextColor="gray"
          />
          <TextInput
            onChangeText={this.setConfirmaSenha}
            value={this.state.confirmaSenha}
            style={styles.entrada}
            placeholder={'Confirmar senha'}
            placeholderTextColor="gray"
          />

          <TouchableOpacity style={styles.botao} onPress={this.buttonRecuperar}>
            <Text style={styles.corTexto}>Recuperar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 760,
  },

  logo: {
    width: 120,
    height: 120,
    marginLeft: 140,
  },

  texto: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 35,
    marginTop: 10,
    marginBottom: 100,
  },

  entrada: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    fontSize: 17,
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
