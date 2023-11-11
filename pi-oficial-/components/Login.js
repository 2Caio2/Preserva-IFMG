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
        email: null,
        senha: null,
      };
    } else {
      for (i = 0; i < global.dados.length; i++) {
        if (global.dados[i].id == this.props.route.params.id) {
          this.state = {
            email: global.dados[i].email,
            senha: global.dados[i].senha,
          };
        }
      }
    }
  }

  setEmail = (text) => {
    this.setState({
      email: text,
    });
  };

  setSenha = (text) => {
    this.setState({
      senha: text,
    });
  };

  buttonCadastrar = () => {
    this.props.navigation.push('Cadastro');
  };

  buttonEntrar = () => {
    this.props.navigation.push('TelaMenu');
  };

  buttonSenha = () => {
    this.props.navigation.push('MudarSenha');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../assets/oncaLaranja.png')}
          />
          <Text style={styles.texto}>Entre com sua conta</Text>
          <TextInput
            onChangeText={this.setEmail}
            value={this.state.email}
            style={styles.entrada}
            placeholder={'Email'}
            placeholderTextColor="gray"
          />
          <TextInput
            onChangeText={this.setSenha}
            value={this.state.senha}
            style={styles.entrada}
            placeholder={'Senha'}
            placeholderTextColor="gray"
            secureTextEntry
          />

          <TouchableOpacity style={styles.botao} onPress={this.buttonEntrar}>
            <Text style={styles.corTexto}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.textoSenha}
            onPress={this.buttonSenha}>
            <Text style={styles.textoPerg}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <View style={styles.textoLogin}>
            <Text>Ainda não tem uma conta? </Text>
            <TouchableOpacity onPress={this.buttonCadastrar}>
              <Text style={styles.textoPerg}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
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

  textoLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 200,
    fontFamily: 'Avenir',
  },

  textoPerg: {
    textDecorationLine: 'underline',
    fontFamily: 'Avenir',
    fontSize: 15,
  },

  textoSenha: {
    alignItems: 'center',
    marginTop: 5,
    fontFamily: 'Avenir',
    fontSize: 15,
  },
});
