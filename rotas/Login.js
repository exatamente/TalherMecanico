import React, {Component} from 'react';
import {View, Text, Button,TextInput, Image} from 'react-native';

class Login extends Component{
    render(){
        return(
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 50
            }}>

                <Image source={require('../img/logo.png')} />
                <Text style={{marginBottom: 20, fontSize: 30, justifyContent: 'center'}}> Login </Text>

                <TextInput key={'Usuario'} placeholder={'Usuário'} style={{marginBottom: 20, fontSize: 19, backgroundColor: '#ddd', borderWidth: 1.5, borderColor: 'blue', width: 250, alignItems: 'center' }} />

                <TextInput key={'Senha'} secureTextEntry={true} placeholder={'Senha'} style={{marginBottom: 20, fontSize: 19, backgroundColor: '#ddd', borderWidth: 1.5, borderColor: 'blue', width: 250, alignItems: 'center' }} />

                <Button
                    title="Login"
                    onPress={() => this.props.navigation.push('Home')}
                />

            </View>
        )
    }
}

export default Login;