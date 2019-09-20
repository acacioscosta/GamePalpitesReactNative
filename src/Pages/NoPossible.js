import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackActions, NavigationActions} from 'react-navigation'

import CustomButton from '../Components/CustomButton'

export default function NoPossible(props) {

  function reiniciar() {
    props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ]
    }))
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewInfo}>
        <Text style={styles.txtInfo}>Não existem mais palpites possíveis!</Text>
        <Text style={styles.txtInfo2}>Favor reiniciar o jogo!</Text>
        <CustomButton colorBtn='#606669' txtBtn='REINICIAR' colorTxtBtn='#fff' onPress={ reiniciar } />
      </View>     
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
  viewInfo:{
    borderWidth: 1,
    width: '90%',
    height: '50%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    borderRadius: 3
  },
  txtInfo:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  txtInfo2:{
    fontSize: 30,
    marginBottom: 50,
    textAlign: 'center'
  }
})