import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert, Platform } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Writer from './components/Writer'

//plataform retorna qual a plataforma normal
//Alert para mobile
//COMPONETNES SEMPRE COMEÇA COM MAIUSCULA


const TAMANHO_CIRCULO = 100

//criando um componente e definindo seu atributo/elemento
const MeuComponente = ({ meuElemento }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, style.containerCirculo]}>
      <Text style={style.titulo}>Animações em React native</Text>
      <Writer />
      <TouchableOpacity onPress={meuElemento}>
        <View style={style.circulo}>
          <AntDesign
            name='arrowright'
            size={28}
            color={'#8c4227'}></AntDesign>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {

  const mostrarMsg = () => {
    let mensagem = 'Voce clicou'
    if (Platform.OS == 'web') {
      alert(mensagem)
    } else {
      Alert.alert(
        'Aviso',
        [
          {
            text: 'Cancelar',
            onPress: () => console.log('Pressionou o cancelar'),
            style: 'cancel'
          },
          {
            text: 'Ok',
            onPress: () => console.log('Pressionou o OK')
          }
        ], {
        cancelable: false // tira o cancelamento de cancelar clicando em  qualquer lugar
      })
    }
  }

  return (
    <View style={style.container}>
      <MeuComponente meuElemento={mostrarMsg} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2cdac',
    alignItems: 'center'
  },

  titulo: {
    fontSize: 25,
    color: '#d99873',
    padding: 20
  },

  containerCirculo: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: TAMANHO_CIRCULO
  },

  circulo: {
    backgroundColor: '#3d9987',
    width: TAMANHO_CIRCULO,
    height: TAMANHO_CIRCULO,
    borderRadius: TAMANHO_CIRCULO / 2,
    justifyContent: 'center',
    alignItems: 'center'
  }

})
