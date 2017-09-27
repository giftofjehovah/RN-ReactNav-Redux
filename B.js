import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

const B = props => {
  const { dispatch, state } = props
  const buttonOnPress = () =>
    dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })]
      })
    )
  console.log('rendering B')
  return (
    <View>
      <Text>This is B</Text>
      <Button onPress={buttonOnPress} title={'reset'} />
    </View>
  )
}

B.navigationOptions = {
  title: 'ViewB'
}

const mapStateToProps = state => ({ state: state.state })

export default connect(mapStateToProps)(B)
