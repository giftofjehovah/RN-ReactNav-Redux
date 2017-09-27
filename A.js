import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

const A = props => {
  const { dispatch, state } = props
  const buttonOnPress = () => dispatch(NavigationActions.navigate({ routeName: 'B' }))
  console.log('rendering A')
  return (
    <View>
      <Text>This is A</Text>
      <Button onPress={buttonOnPress} title={'Go to B'} />
    </View>
  )
}

A.navigationOptions = {
  title: 'View'
}

const mapStateToProps = state => ({ state: state.state })

export default connect(mapStateToProps)(A)
