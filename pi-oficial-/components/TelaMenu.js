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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import ComecaQuiz from './ComecaQuiz';
import TelaPerfil from './TelaPerfil';
import HomeMenu from './HomeMenu';
import SobreNos from './SobreNos';

export default class TelaMenu extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        style={styles.fundo}
        activeColor="#999"
        inactiveColor="#fff"
        barStyle={styles.barra}>
        <Tab.Screen
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../assets/home.png')}
                />
              );
            },
          }}
          name="Menu"
          component={HomeMenu}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../assets/formulario.png')}
                />
              );
            },
          }}
          name="Quiz"
          component={ComecaQuiz}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../assets/nos.png')}
                />
              );
            },
          }}
          name="Nós"
          component={SobreNos}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../assets/usuario.png')}
                />
              );
            },
          }}
          name="Perfil"
          component={TelaPerfil}
        />
      </Tab.Navigator>
    );
  }
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  barra: {
    backgroundColor: '#689894',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
  },

  fundo: {
    backgroundColor: '#689894',
    color: '#689894',
  },
});
