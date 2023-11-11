import * as React from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';

export default class HomeMenu extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.imagem}
            source={require('../assets/Principal.png')}
          />
          <Text style={styles.text}>Bacia Hidrográfica</Text>
          <Text style={styles.preservae}>
            A bacia hidrográfica do Ribeirão do Onça localiza-se no Alto Rio das
            Velhas e é composta por Belo Horizonte e Contagem. A Unidade
            Territorial (UTE) Ribeirão Onça possui 25 Unidades de Conservação
            inseridas no seu território, não possuindo uma área considerada
            prioritária para conservação. Contudo, a bacia ainda apresenta um
            espaço degradado e bastante negligenciado por parte dos órgãos
            públicos responsáveis pela preservação do meio ambiente.
          </Text>
          <Image
            style={styles.imagem2}
            source={require('../assets/corrego.jpg')}
          />
          <Text style={styles.preservae1}>
            Até hoje não se sabe ao certo a origem do nome Ribeirão Onça, mas
            existem três lendas mais aceitas: 1) Pode ser uma referência a um
            homem que morava nas margens do Ribeirão "bravo igual onça"; 2) Uma
            narrativa acerca do nome se constituiu devido às onças presentes na
            região; 3) Por fim, uma hipótese é de que o nome seja fruto do ouro
            extraído da região no século passado.
          </Text>
          <Text style={styles.preservae1}>
            Apesar de ser um espaço que vem sendo cada vez mais deteriorado, a
            bacia conta com diversas riquezas naturais na fauna e flora ao seu
            redor. Além disso, faz-se presente nos arredores da bacia
            hidrográfica campanhas comunitárias em prol de sua preservação, como
            os núcleos integrados de projetos Manuelzão, que procuram soluções
            para os problemas ambientais da bacia.
          </Text>
          <Text style={styles.preservae1}>
            O aplicativo Preservaê tem como objetivo principal auxiliar, de
            maneira lúdica e imersiva, o fluxo de informações, no que tange à
            Bacia Hidrográfica Ribeirão do Onça e suas adjacências; não só
            denunciando as barreiras ambientais, como também ressaltando a
            importância da defesa dessa região tão importante para nós,
            moradores da região metropolitana de Belo Horizonte.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFF',
    height: '100%',
  },

  text: {
    fontSize: 45,
    marginBottom: 160,
    marginTop: -200,
    fontFamily: 'Avenir',
    color: 'white',
    fontWeight: 'bold',
  },

  preservae: {
    marginTop: -70,
    fontSize: 20,
    fontFamily: 'Avenir',
    textAlign: 'justify',
  },

  preservae1: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Avenir',
    textAlign: 'justify',
  },

  imagem: {
    width: 390,
    height: 480,
    marginTop: -200,
    borderRadius: '85px',
  },

  imagem2: {
    width: 350,
    height: 250,
    borderRadius: 30,
    marginTop: 10,
  },
});
