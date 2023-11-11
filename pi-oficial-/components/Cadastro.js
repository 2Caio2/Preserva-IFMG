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
        nome: null,
        email: null,
        senha: null,
        dataNasc: null,
        cep: null,
        regiao: null,
      };
    } else {
      for (i = 0; i < global.dados.length; i++) {
        if (global.dados[i].id == this.props.route.params.id) {
          this.state = {
            nome: global.dados[i].nome,
            email: global.dados[i].email,
            senha: global.dados[i].senha,
            dataNasc: global.dados[i].dataNasc,
            cep: global.dados[i].cep,
            regiao: global.dados[i].regiao,
          };
        }
      }
    }
  }

  setNome = (text) => {
    this.setState({
      nome: text,
    });
  };

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

  setDataNasc = (text) => {
    this.setState({
      dataNasc: text,
    });
  };

  setCep = (text) => {
    this.setState({
      cep: text,
    });
  };

  setRegiao = (text) => {
    this.setState({
      regiao: text,
    });
  };

  buttonCadastrar = () => {
    if (this.props.route.params == null) {
      global.dados.push({
        nome: this.state.nome,
        email: this.state.email,
        senha: this.state.senha,
        dataNasc: this.state.dataNasc,
        cep: this.state.cep,
        regiao: this.state.regiao,
        id: new Date(),
      });
    } else {
      for (i = 0; i < global.dados.length; i++) {
        if (global.dados[i].id == this.props.route.params.id) {
          (global.dados[i].nome = this.state.nome),
            (global.dados[i].email = this.state.email),
            (global.dados[i].senha = this.state.senha),
            (global.dados[i].dataNasc = this.state.dataNasc),
            (global.dados[i].cep = this.state.cep),
            (global.dados[i].regiao = this.state.regiao);
        }
      }
    }

    this.props.navigation.push('TelaMenu');
  };

  buttonAcessar = () => {
    this.props.navigation.push('Login');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../assets/oncaLaranja.png')}
          />
          <Text style={styles.texto}>Cadastre sua conta</Text>
          <TextInput
            onChangeText={this.setNome}
            value={this.state.nome}
            style={styles.entrada}
            placeholder={'Nome completo'}
            placeholderTextColor="gray"
          />
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
          />
          <TextInput
            onChangeText={this.setDataNasc}
            value={this.state.dataNasc}
            style={styles.entrada}
            placeholder={'Data de nascimento'}
            placeholderTextColor="gray"
          />
          <TextInput
            onChangeText={this.setCep}
            value={this.state.cep}
            style={styles.entrada}
            placeholder={'CEP'}
            placeholderTextColor="gray"
          />
          <TextInput
            onChangeText={this.setRegiao}
            value={this.state.regiao}
            style={styles.entrada}
            placeholder={'Região'}
            placeholderTextColor="gray"
          />

          <TouchableOpacity style={styles.botao} onPress={this.buttonCadastrar}>
            <Text style={styles.corTexto}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={styles.textoLogin}>
            <Text>Já tem uma conta? </Text>
            <TouchableOpacity onPress={this.buttonAcessar}>
              <Text style={styles.textoPerg}>Acesse</Text>
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
    marginBottom: 90,
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
    marginTop: 80,
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
    fontFamily: 'Avenir',
    marginTop: 100,
  },

  textoPerg: {
    textDecorationLine: 'underline',
    fontFamily: 'Avenir',
  },
});
