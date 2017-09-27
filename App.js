import React from 'react'
import { TextInput, View, Button, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'
import { editInput, addTodo } from './actions'
import { List } from 'immutable'
import { NavigationActions } from 'react-navigation'

const App = props => {
  const { dispatch, state } = props
  const nameOnChange = text => dispatch(editInput({ value: text }))
  // const buttonOnPress = () => dispatch(addTodo())
  // const buttonOnPress = () => navigate('Todos')
  const buttonOnPress = () => dispatch(NavigationActions.navigate({ routeName: 'A' }))
  console.log('rendering Home')
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={nameOnChange}
        value={state.get('text')}
      />
      <Button onPress={buttonOnPress} title={'Add'} />
      <FlatList
        keyExtractor={(item, index) => index}
        data={state.get('todos', List()).toJS()}
        renderItem={({ item }) => <Text>{item.todo}</Text>}
      />
    </View>
  )
}

App.navigationOptions = {
  title: 'Welcome'
}

const mapStateToProps = state => ({ state: state.state })

export default connect(mapStateToProps)(App)
