import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk' 
import { View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import Router from './Router'

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
//
 
export default App

//need to provide Provider with an instance of a redux store

//The provider tag is what makes sure all the connect tags can get access to the store
//grab our redux state and then pass it off to individual components
