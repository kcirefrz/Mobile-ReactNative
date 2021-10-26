import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



class App extends Component{
  render(){
 
    
 
    return(
      <View style={{ backgroundColor: '#FFEBCD', height: 1000 }}>
        <Image class="eu"
          source={ require('./src/images/erick.jpg') }
          style={{ width: 300, height: 300, marginTop: 50, marginRight: 35, marginLeft: 35, borderRadius: 150 }}
        />
      
        <Text class="dadosPessoais"
        style={{ fontSize: 20, marginTop: 20, marginBottom: 5, marginLeft: 20, color: '#4F4F4F', fontWeight: '900' }}
        >Dados pessoais:</Text>

        <Text class="nome"
        style={{ fontSize: 17, marginTop: 2, marginBottom: 2, marginLeft: 25, color: '#4F4F4F', fontStyle: 'italic' }}
        >Nome: Erick
        </Text>

        <Text class="idade"
        style={{ fontSize: 17, marginTop: 2, marginBottom: 2, marginLeft: 25, color: '#4F4F4F', fontStyle: 'italic' }}
        >Idade: 19 anos
        </Text>



        <Text class="formacao"
        style={{ fontSize: 20, marginTop: 20, marginBottom: 5, marginLeft: 20, color: '#4F4F4F', fontWeight: '900' }}
        >Formação:</Text>

        <Text class="graduacaoNivel"
        style={{ fontSize: 17, marginTop: 2, marginBottom: 2, marginLeft: 25, color: '#4F4F4F', fontStyle: 'italic' }}
        >Nível de graduação: Cursando faculdade
        </Text>



        <Text class="experiencia"
        style={{ fontSize: 20, marginTop: 20, marginBottom: 5, marginLeft: 20, color: '#4F4F4F', fontWeight: '900' }}
        >Experiência:</Text>

        <Text class="tempoExp"
        style={{ fontSize: 17, marginTop: 2, marginBottom: 2, marginLeft: 25, color: '#4F4F4F', fontStyle: 'italic' }}
        >2 anos
        </Text>



        <Text class="projetos"
        style={{ fontSize: 20, marginTop: 20, marginBottom: 5, marginLeft: 20, color: '#4F4F4F', fontWeight: '900' }}
        >Projetos:</Text>

        <Text class="projs"
        style={{ fontSize: 17, marginTop: 2, marginBottom: 2, marginLeft: 25, color: '#4F4F4F', fontStyle: 'italic' }}
        >MeuAppExpo
        </Text>
 
      </View>
    )
  }
}
 
export default App;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
