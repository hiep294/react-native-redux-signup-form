import Configuration from './src/config'

import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
// import DesignScreen from './src/screens/DesignScreen'
// import DemoScreen from './src/screens/DemoScreen'

import React from 'react';
import AppText from './src/components/AppText';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    signUp: {
      screen: SignupScreen,
      navigationOptions: {
        title: <AppText languageKey="sign-up" />,
      }
    },
    signIn: {
      screen: SigninScreen,
      navigationOptions: {
        title: <AppText languageKey="sign-in" />,
      }
    }
  }),
  // designFlow: createStackNavigator({  
  // DemoScreen,
  // DesignScreen,
  // }) 
})

const AppMain = createAppContainer(switchNavigator)

export default () => <Configuration><AppMain /></Configuration>
