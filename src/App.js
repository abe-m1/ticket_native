import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk' 
import { View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import Router from './Router'
import LoginForm from './components/LoginForm'

class App extends Component{
    componentWillMount(){
       
}
      
render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return(
            <Provider store={store}>
                <Router />
            </Provider>

        )
    }
}
 
export default App
