import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaSplash from './components/TelaSplash';
import TelaInicial from './components/TelaInicial';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import MudarSenha from './components/MudarSenha';
import TelaMenu from './components/TelaMenu';
import ComecaQuiz from './components/ComecaQuiz';
import TelaPerfil from './components/TelaPerfil';
import SobreNos from './components/SobreNos';
import EditarUser from './components/EditarUser';
import Home from './components/home';
import Home2 from './components/home2';
import Home3 from './components/home3';
import Home6 from './components/home6';
import Home8 from './components/home8';
import Home9 from './components/home9';
import Resultados from './components/resultados';
global.dados = [];

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome">
          <Stack.Screen
            name="TelaSplash"
            component={TelaSplash}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="TelaInicial"
            component={TelaInicial}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: '' }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ title: '' }}
          />
          <Stack.Screen
            name="MudarSenha"
            component={MudarSenha}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="TelaMenu"
            component={TelaMenu}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="ComecaQuiz"
            component={ComecaQuiz}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="TelaPerfil"
            component={TelaPerfil}
            options={{ title: '' }}
          />
          <Stack.Screen
            name="SobreNos"
            component={SobreNos}
            options={{ title: '', headerStyle:{backgroundColor:"#EE892F"}}}
          />
          <Stack.Screen
            name="EditarUser"
            component={EditarUser}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="Home2"
            component={Home2}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="Home3"
            component={Home3}
            options={{ title: '', headerShown: false }}
          />
       
          <Stack.Screen
            name="Home6"
            component={Home6}
            options={{ title: '', headerShown: false }}
          />
         
          <Stack.Screen
            name="Home8"
            component={Home8}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="Home9"
            component={Home9}
            options={{ title: '', headerShown: false }}
          />
         
          <Stack.Screen
            name="Resultados"
            component={Resultados}
            options={{ title: '', headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
