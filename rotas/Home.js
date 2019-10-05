import React, {Component} from 'react';
import {View, Text, Button,TextInput, Image} from 'react-native';

class Home extends Component{
    render(){
        return(
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text />
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.push('Home')}
                />

            </View>
        )
    }
}

export default Home;