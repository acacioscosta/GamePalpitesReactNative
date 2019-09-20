import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { StackActions, NavigationActions} from 'react-navigation'

import CustomButton from '../Components/CustomButton'
import Footer from '../Components/Footer'

export default function Playing(props) {

  const [palpite, setPalpite] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)
  let [tentativas, setTentativas] = useState(0)
  const [palpitados, setPalpitados] = useState([])

  function palpitar() {
    let randomGerado = getRandom()
    setTentativas(tentativas += 1)
    setPalpite(randomGerado)
    setPalpitados([...palpitados, randomGerado])
  }

  function getRandom() {
    let continua = true
    let random = 0

    do {
      random = Math.floor(Math.random() * (max - min + 1)) + min //Gera um número aleatório dado um intervalo

      if (random === min && random === max) {
        continua = false
        noPossibility()
        break;
      } else if (palpitados.indexOf(random) > -1) {
        let anterior = (random - 1)
        let proximo = (random + 1)
        if ((palpitados.indexOf(anterior) > -1) && (palpitados.indexOf(proximo) > -1)) {
          continua = false
          noPossibility()
          break;
        } else {
          continua = true
        }
      } else {
        continua = false
      }

    } while (continua)

    return random

  }

  function menor() {
    setMax(palpite)
  }

  function maior() {
    setMin(palpite)
  }

  function reiniciar() {
    props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ]
    }))
  }

  function acertou() {
      props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Finished', params: { pensado: palpite, tentativas } })
        ]
      }))
  }

  function noPossibility() {
    props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'NoPossible' }, { pensado: palpite})
      ]
    }))
  }

  useEffect(() => {
    palpitar()
  }, [min, max])

  return (
    <View style={styles.container}>

      <View style={styles.viewTutorial}>
        <Text style={styles.txtInstrucao}>Leia as instruções: </Text>
        <Text style={styles.instrucoes}>1. Atente-se ao número palpitado!</Text>
        <Text style={styles.instrucoes}>2. Caso o palpite seja o número pensado, clique em ACERTOU!</Text>
        <Text style={styles.instrucoes}>3. Se não acertou, informe se o número que você pensou é MENOR ou MAIOR que o palpitado.</Text>
        <Text style={styles.instrucoes}>4. Clique em REINICIAR para um novo jogo.</Text>
      </View>

      <View style={styles.viewGame}>
        <Text style={styles.txtPalpite}>O número é {palpite}?</Text>
        <View style={styles.viewButton}>
          <CustomButton colorBtn='#219389' txtBtn='MENOR' colorTxtBtn='#fff' onPress={ menor } />
          <CustomButton colorBtn='#b00020' txtBtn='MAIOR' colorTxtBtn='#fff' onPress={ maior } />
        </View>
        <View style={styles.viewButton}>
          <CustomButton colorBtn='#606669' txtBtn='REINICIAR' colorTxtBtn='#fff' onPress={ reiniciar } />
          <CustomButton colorBtn='#3498db' txtBtn='ACERTOU' colorTxtBtn='#fff' onPress={ acertou } />          
        </View>
      </View>

      <Footer />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ddd',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewTutorial:{
    flex: 1,
    marginTop: 10,
    padding: 10
  },
  txtInstrucao:{
    fontSize: 40, 
    fontWeight: 'bold', 
    marginBottom: 5, 
    textAlign: 'center'
  },
  instrucoes:{
    fontSize: 20
  },
  viewGame:{
    flex: 1,
    width: '90%',
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 3,
    marginBottom: 100
  },
  txtPalpite:{
    fontSize: 40
  },
  viewButton:{
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 30
  }
})