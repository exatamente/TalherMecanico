import React, {Component} from 'react';
import {View, Text, TextInput, Image,Alert, TouchableOpacity, Dimensions, StatusBar} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import styles from '../stylesheets/viewCarStyle.js';
import Home from './Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


class ViewCar extends Component {
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
	

    render() {
        const { navigation } = this.props;
		let ScreenHeight = Dimensions.get("window").height;
        return (
            <LinearGradient colors={['#e35d5b', '#e53935']}>
                <StatusBar backgroundColor="#eea849" />
                <View style={{height: ScreenHeight}}>
					<View style={styles.Form}>
                        <TextInput editable={false} onChangeText={(text) => this.setState({marca: text})} value={'Marca: '+ this.state.marca} placeholder={'Marca'}
                                   style={styles.Input}/>
                        <TextInput editable={false} onChangeText={(text) => this.setState({ano: text})} value={'Ano: ' + this.state.ano} placeholder={'Ano'}
                                   style={styles.Input}/>
                        <TextInput editable={false} onChangeText={(text) => this.setState({placa: text})} value={'Placa: ' + this.state.placa} placeholder={'Placa'}
                                   style={styles.Input}/>
                        <TextInput editable={false} onChangeText={(text) => this.setState({cor: text})} value={'Cor: ' + this.state.cor} placeholder={'Cor'}
                                   style={styles.Input}/>
                        <TextInput editable={false} onChangeText={(text) => this.setState({proprietario: text})} value={'Proprietário: ' + this.state.proprietario}
                                   placeholder={'Proprietário'} style={styles.Input}/>
                        <TextInput editable={false} onChangeText={(text) => this.setState({mecanico: text})} placeholder={'Mecânico'} value={'Mecânico: ' + this.state.mecanico}
                                   style={styles.Input}/>
                        <TextInput editable={false} onChangeText={(text) => this.setState({data: text})} placeholder={'Data'} value={'Data: ' + this.state.data}
                                   style={styles.Input}/>
                    </View>
				</View>
            </LinearGradient>
        );
    }
}

export default ViewCar;