import React, {Component} from 'react';
import {View, Text, Button,TextInput, Image,Alert} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import styles from '../stylesheets/AddStyle.js';
import Home from './Home'

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


    render() {
        const { navigation } = this.props;
        return (
            <LinearGradient colors={['#e35d5b', '#e53935']}>
                <View>
                    <View>
                        <Text style={{fontSize: 25, margin: 20, textAlign: 'center', color: 'white'}}>
                            Edita Carro
                        </Text>
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
                    <Button
                        title="Atualizar"
                        onPress={this.finaliza}
                    />
                </View>
            </LinearGradient>
        );
    }
}

export default EditCar;