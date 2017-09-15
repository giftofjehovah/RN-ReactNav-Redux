/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import store from './store'
import Navigator from './Navigator'

class reactNativeTodo extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('reactNativeTodo', () => reactNativeTodo)
