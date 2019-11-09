import React, {Component} from 'react';
import {Alert, View, Text, Button,TextInput, Image, StyleSheet, BackHandler, StatusBar} from 'react-native';
import styles from '../stylesheets/loginStyle.js'
import LinearGradient from "react-native-linear-gradient";
import { NavigationActions, StackActions, withNavigationFocus } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Login extends Component{
    state = {
        username: 'NULL',
        password: 'NULL'
    };
	
	reset(){
		return this.props.navigation.dispatch(NavigationActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'Home'})]
		}));
	}	
	
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}

	handleBackButton = () => {
		if (this.props.navigation.isFocused()) {
			Alert.alert('Talher Mecânico','Você tem certeza que deseja sair do Aplicativo?',
				[
					{
					text: 'Cancelar',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
					},
					{
					text: 'Sim',
					onPress: () => BackHandler.exitApp()
					}
				],
				
				{
				  cancelable: false
				}
			
			);
			return true;
		}
	};


	
    render(){
        return(
            <LinearGradient colors={['#e35d5b', '#e53935']}>
				<StatusBar backgroundColor="#eea849" />
			<KeyboardAwareScrollView>
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
									const resetAction = StackActions.reset({
									index: 0,
										actions: [NavigationActions.navigate({ routeName: 'Home' })],
									});
									this.props.navigation.dispatch(resetAction); 
									
									return;
								}

								Alert.alert('Usuário ou Senha estão incorretos!');
							}
                        }
                    />
                </View>
            </View>
			</KeyboardAwareScrollView>
            </LinearGradient>
        )
    }
}

export default Login;
