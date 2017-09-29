import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

const A = props => {
  const { dispatch, state } = props
  const buttonOnPressB = () => dispatch(NavigationActions.navigate({ routeName: 'B' }))
  const buttonOnPressC = () => dispatch(NavigationActions.navigate({ routeName: 'C' }))
  console.log('rendering A')
  return (
    <View>
      <Text>This is A</Text>
      <Button onPress={buttonOnPressB} title={'Go to B'} />
      <Button onPress={buttonOnPressC} title={'Go to C'} />
    </View>
  )
}

A.navigationOptions = {
  title: 'View'
}

const mapStateToProps = state => ({ state: state.state })

export default connect(mapStateToProps)(A)
