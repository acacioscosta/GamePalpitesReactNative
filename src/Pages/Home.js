import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'

import CustomButton from '../Components/CustomButton'
import Footer from '../Components/Footer'

export default function Home(props) {

  function iniciar() {
    props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Playing' })
      ]
    }))
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewPresentation}>
        <Text style={styles.txtWelcome}>Seja bem vindo ao Game Palpites!</Text>
        <Text style={styles.txtInformation}>Preciso adivinhar o número que você pensou.</Text>
      </View>
      <View style={styles.viewTutorial}>
        <Text style={styles.txtTutorial}>Pense em um número entre 0 e 300, depois clique em INICIAR</Text>
        <CustomButton colorBtn='#3498db' txtBtn='INICIAR' colorTxtBtn='#fff' onPress={ iniciar } />
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
  viewPresentation:{
    flex: 1, 
    justifyContent: 'flex-start', 
    marginTop: 70
  },
  txtWelcome:{
    fontSize: 30, 
    textAlign: "center",
    marginBottom: 10,
    fontWeight: 'bold'
  },
  txtInformation:{
    fontSize: 20, 
    textAlign: "center"
  },
  viewTutorial:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 180
  },
  txtTutorial:{
    fontSize: 30, 
    textAlign: 'center',
    marginBottom: 10
  },
  btn:{
    marginTop: 5,
    borderWidth: 1,
    backgroundColor: '#3498db',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3
  },
  txtBtn:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
})