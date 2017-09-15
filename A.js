import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

const A = props => {
  const { dispatch, state } = props
  const buttonOnPress = () => dispatch(NavigationActions.navigate({ routeName: 'A' }))
  return (
    <View>
      <Text>Bye</Text>
      <Button onPress={buttonOnPress} title={'A Again'} />
    </View>
  )
}

A.navigationOptions = {
  title: 'View'
}

const mapStateToProps = state => ({ state: state.state })

export default connect(mapStateToProps)(A)