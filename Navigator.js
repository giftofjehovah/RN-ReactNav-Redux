import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation'
import Todos from './Todos'
import App from './App'
import A from './A'
import B from './B'
import { connect } from 'react-redux'
import React from 'react'

const Stack = StackNavigator({
  Home: { screen: App },
  A: { screen: A },
  B: { screen: B }
})

const Stack2 = StackNavigator({
  Todos: { screen: Todos }
})

export const Navigator = TabNavigator(
  {
    Home: { screen: Stack },
    Todos: { screen: Stack2 }
  },
  {
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63'
    }
  }
)
const AppWithNavigationState = ({ dispatch, nav }) => {
  return <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
