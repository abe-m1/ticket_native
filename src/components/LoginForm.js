import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common'

export class LoginForm extends Component{
render(){
    return(
        <Card>
            <CardSection>
                <Input 
                    value={this.props.email}
                    labe="Email"
                    placeHolder="email@email.com"
                    onChangeText={this.onEmailChange.bind(this)}
                />
            </CardSection>
            <CardSection>
                <Input 
                    secureTextEntry
                    value={this.props.password}
                    labe="Password"
                    placeHolder="password"
                    onChangeText={this.onPasswordChange.bind(this)}
                />
            </CardSection>

            <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
                


           
        </Card>
    )
}
}


