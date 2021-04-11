import React, { useRef, useState } from 'react' //importando o hook useRef
import { View, StyleSheet, Text, TouchableOpacity, Alert, Platform, Animated } from 'react-native'
import { AntDesign } from '@expo/vector-icons' //lib do expo para icones
import Writer from './components/Writer' //importando o svg já em jsx

//plataform retorna qual a plataforma normal
//Alert para mobile
//COMPONETNES SEMPRE COMEÇA COM MAIUSCULA


const TAMANHO_CIRCULO = 100

/*
 Criando um componente:
  MeuComponente é um componente que retorna
  dois componentes Animated.View, lembrando 
  que todo elemento sempre começa com a primeira letra 
  maiúscula. 
  No que seriam argumentos da arrow function deste
  componente, é criada uma especie de objeto, onde
  cada atributo deste objeto será o atributo deste 
  componente criado, como por exemplo o Atributo style
  que está presente em todos os componentes.
  
 */
const MeuComponente = ({ meuAtributo, animatedValue }) => {
  const animandoOFundo = animatedValue.interpolate({
    inputRange: [0, 0.0001, 0.5, 0.50001],
    outputRange: ['#000000', '#2a2f2d', '#32dc', '#1100dd']
  })

  const animandoOTexto = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [20, 35, 20]
  })

  const animandoACor = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#8c4337', '#fff', '#f2cdac']
  })

  return (

    <Animated.View style={[StyleSheet.absoluteFillObject, style.containerCirculo, { backgroundColor: animandoOFundo }]}>

      <Text style={style.titulo}>Animações em React native</Text>

      <Writer />

      <Animated.Text 
      style={{
        fontSize: animandoOTexto,
        color: animandoACor,
        margin: 18
      }}> O segredo de ser um programador é programar! </Animated.Text>

      <Animated.View style={[style.circulo, {
        transform:
          [
            {
              rotateY: animatedValue.interpolate({
                inputRange: [0, 0.5, 1, 1],
                outputRange: ['0deg', '-90deg', '-180deg', '0deg']
              })
            },
            {
              scale: animatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 5, 1]
              })
            },
            {
              translateX: animatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 50, 0]
              })
            }
          ]
      }]}>

        <TouchableOpacity onPress={meuAtributo}>

          <View style={[style.circulo]}>
            <AntDesign name='arrowright' size={28} color={'#8c4227'} />
          </View>

        </TouchableOpacity>

      </Animated.View>
    </Animated.View>
  )
}

export default function App() {

  const animatedValue = useRef(new Animated.Value(0)).current
  const [indice, setIndice] = useState(0)

  const animacao = (toValue) => Animated.timing(animatedValue, {
    toValue: toValue,
    duration: 3000,
    useNativeDriver: false
  })

  const mostrarMsg = () => {
    animacao(indice === 1 ? 0 : 1).start()
    setIndice(indice === 1 ? 0 : 1)
  }

  return (
    <View style={style.container}>
      <MeuComponente meuAtributo={mostrarMsg} animatedValue={animatedValue} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#110333',
    alignItems: 'center'
  },

  titulo: {
    fontSize: 25,
    color: '#d99873',
    top: 30
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