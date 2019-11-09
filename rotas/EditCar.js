import React, {Component} from 'react';
import {View, Text, TextInput, Image,Alert, TouchableOpacity, Dimensions, BackHandler, StatusBar} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import styles from '../stylesheets/editStyle.js';
import Home from './Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class EditCar extends Component {
    constructor(props){
        super(props);
        const { navigation } = this.props;

        this.carro = navigation.getParam("carro", "");

        this.state = {
            marca: this.carro.marca,
            ano: this.carro.ano,
            placa: this.carro.placa,
            cor: this.carro.cor,
            proprietario: this.carro.proprietario,
            mecanico: this.carro.mecanico,
            data: this.carro.data
        };

        this.finaliza = this.finaliza.bind(this);
    }

    finaliza() {
        const { navigation } = this.props;
        let newCar = {
            marca: this.state.marca,
            ano: this.state.ano,
            placa: this.state.placa,
            cor: this.state.cor,
            proprietario: this.state.proprietario,
            mecanico: this.state.mecanico,
            data: this.state.data
        };
        navigation.getParam("continuaEditar")(newCar);
        navigation.navigate('Home');
    }
	
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}

	handleBackButton = () => {
	if (this.props.navigation.isFocused()) {
		this.finaliza();
		return true;
	}
	};


    render() {
        const { navigation } = this.props;
		let ScreenHeight = Dimensions.get("window").height;
        return (
            <LinearGradient colors={['#e35d5b', '#e53935']}>
                <StatusBar backgroundColor="#eea849" />
                <KeyboardAwareScrollView>
					<View>
						<View style={styles.Form}>
							<TextInput onChangeText={(text) => this.setState({marca: text})} value={this.state.marca} placeholder={'Marca'}
									   style={styles.Input}/>
							<TextInput onChangeText={(text) => this.setState({ano: text})} value={this.state.ano} placeholder={'Ano'}
									   style={styles.Input}/>
							<TextInput onChangeText={(text) => this.setState({placa: text})} value={this.state.placa} placeholder={'Placa'}
									   style={styles.Input}/>
							<TextInput onChangeText={(text) => this.setState({cor: text})} value={this.state.cor} placeholder={'Cor'}
									   style={styles.Input}/>
							<TextInput onChangeText={(text) => this.setState({proprietario: text})} value={this.state.proprietario}
									   placeholder={'Proprietário'} style={styles.Input}/>
							<TextInput onChangeText={(text) => this.setState({mecanico: text})} placeholder={'Mecânico'} value={this.state.mecanico}
									   style={styles.Input}/>
							<TextInput onChangeText={(text) => this.setState({data: text})} placeholder={'Data'} value={this.state.data}
									   style={styles.Input}/>
						</View>
						<View style={{alignItems: 'center', paddingBottom: 30}}>
							 <Button titleStyle={{color: 'white'}} buttonStyle={styles.Button} icon={ <Icon style={styles.Icon} name="check" size={23} color="black"/> } title={"Finalizar"} onPress={this.finaliza} />
						</View>
					</View>
				</KeyboardAwareScrollView>
            </LinearGradient>
        );
    }
}

export default EditCar;