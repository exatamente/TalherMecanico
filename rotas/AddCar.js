import React, {Component} from 'react';
import {View, Text, TextInput, Image, Alert, Dimensions} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import styles from '../stylesheets/AddStyle.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marca: '',
            ano: '',
            proprietario: '',
            placa: '',
            data: '',
            cor: '',
            mecanico: ''
        };

        this.finaliza = this.finaliza.bind(this);
    }

    finaliza() {
        const { navigation } = this.props;
        var novoCarro = {
            marca: this.state.marca,
            ano: this.state.ano,
            placa: this.state.placa,
            cor: this.state.cor,
            proprietario: this.state.proprietario,
            mecanico: this.state.mecanico,
            data: this.state.data
        };

        navigation.getParam("continua")(novoCarro);
        navigation.navigate('Home');
    }

    render() {
        const { navigation } = this.props;
		let ScreenHeight = Dimensions.get("window").height;
        return (
            <LinearGradient colors={['#e35d5b', '#e53935']}>
                <View style={{height: ScreenHeight}}>
					<View style={styles.Form}>
                        <TextInput onChangeText={(text) => this.setState({marca: text})} placeholder={'Marca'}
                                   style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({ano: text})} placeholder={'Ano'}
                                   style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({placa: text})} placeholder={'Placa'}
                                   style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({cor: text})} placeholder={'Cor'}
                                   style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({proprietario: text})}
                                   placeholder={'Proprietário'} style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({mecanico: text})} placeholder={'Mecânico'}
                                   style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({data: text})} placeholder={'Data'}
                                   style={styles.Input}/>
                    </View>
					<View style={{alignItems: 'center'}}>
						 <Button titleStyle={{color: 'white'}} buttonStyle={{backgroundColor:'#eea849', width: 310, height: 45, borderRadius: 30}} icon={ <Icon style={{paddingTop: 3,paddingRight: 10}} name="plus" size={23} color="black"/> } title={"Adicionar"} onPress={this.finaliza} />
					</View>
                </View>
            </LinearGradient>
        );
    }
}

export default AddCar;