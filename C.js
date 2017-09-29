import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

const C = props => {
  const { dispatch, state } = props
  const buttonOnPress = () => dispatch(NavigationActions.back())
  console.log('rendering C')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is C</Text>

      <Button onPress={buttonOnPress} title={'Close'} />
    </View>
  )
}

C.navigationOptions = {
  title: 'View'
}

const mapStateToProps = state => ({ state: state.state })

export default connect(mapStateToProps)(C)
