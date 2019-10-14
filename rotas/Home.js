import React, {Component} from 'react';
import {View, Text, Button,TextInput, Image} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

class Home extends Component{
    render(){
        const { navigation } = this.props;
        return(
            <LinearGradient colors={['#e35d5b', '#e53935']}>
            <View>
                <View style={{margin: 30}}>
                    <Button
                        title="Adicionar Carro" onPress={() => this.props.navigation.push('AddCar')}
                    />
                </View>
                <Text>
                    nome:
                    {JSON.stringify(navigation.getParam('nome', 'default value'))}
                </Text>
            </View>
            </LinearGradient>
        )
    }
}

export default Home;

/* <Button
    title="Login"
    onPress={() => this.props.navigation.push('Login')}
/> */

