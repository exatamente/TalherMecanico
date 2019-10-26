import React, {Component} from 'react';
import {Alert, View, Text, Button,TextInput, Image, StyleSheet} from 'react-native';
import styles from '../stylesheets/loginStyle.js'
import LinearGradient from "react-native-linear-gradient";

class Login extends Component{
    state = {
        username: 'admin',
        password: 'admin'
    };

    render(){
        return(
            <LinearGradient colors={['#e35d5b', '#e53935']}>
            <View>
                <View style={styles.inputSection}>
                    <Image source={require('../img/logo.png')} />

                    <Text style={styles.Title}>Talher Mecânico</Text>

                    <TextInput  key={'Usuario'} placeholder={'Usuário'} style={styles.Username} onChangeText={(value) => this.setState({username: value})} />

                    <TextInput key={'Senha'} secureTextEntry={true} placeholder={'Senha'} style={styles.Password} onChangeText={(value) => this.setState({password: value})} />
                </View>
                <View style={styles.Button}>
                    <Button
                        title="Login"
                        color={'#eea849'}
                        onPress={() =>
                        {
                            if((this.state.username == 'admin')  && (this.state.password == 'admin')){
                                this.props.navigation.push('Home')
                                return;
                            }

                            Alert.alert('Usuário ou Senha estão incorretos!');
                        }
                        }
                    />
                </View>
            </View>
            </LinearGradient>
        )
    }
}

export default Login;
