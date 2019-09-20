import { StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from './src/Pages/Home'
import Playing from './src/Pages/Playing'
import Finished from './src/Pages/Finished'
import NoPossible from './src/Pages/NoPossible'

StatusBar.setBarStyle('light-content')

const Navigation = createStackNavigator({
  Home:{
    screen: Home
  },
  Playing:{
    screen: Playing
  },
  Finished:{
    screen: Finished
  },
  NoPossible:{
    screen: NoPossible
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    title: 'Game Palpites',
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold',
      fontSize: 20,
      flex: 1,
      textAlign: "center"
    },
    headerStyle:{
      backgroundColor: '#3498db'
    }
  }
})

const AppContainer = createAppContainer(Navigation)

export default AppContainer