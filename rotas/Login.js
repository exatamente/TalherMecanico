import React, {Component} from 'react';
import {View, Text, Button,TextInput, Image, StyleSheet} from 'react-native';
import styles from '../stylesheets/loginStyle.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "react-native-linear-gradient";

class Login extends Component{
    render(){
        return(
            <LinearGradient colors={['#e35d5b', '#e53935']}>
            <View>
                <View style={styles.inputSection}>
                    <Image source={require('../img/logo.png')} />

                    <Text style={styles.Title}> Iniciar Sessão: </Text>

                    <TextInput  key={'Usuario'} placeholder={'Usuário'} style={styles.Username} />

                    <TextInput key={'Senha'} secureTextEntry={true} placeholder={'Senha'} style={styles.Password} />
                </View>
                <View style={styles.Button}>
                    <Button
                        title="Login"
                        color={'#eea849'}
                        onPress={() => this.props.navigation.push('Home')}
                    />
                </View>
            </View>
            </LinearGradient>
        )
    }
}

export default Login;