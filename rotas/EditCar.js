import React, {Component} from 'react';
import {View, Text, Button,TextInput, Image,Alert} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import styles from '../stylesheets/AddStyle.js';
import Home from './Home'

class EditCar extends Component {
    constructor(props){
        super(props);
        const { navigation } = this.props;
        this.state = {
            marca: navigation.getParam('marca',''),
            ano: navigation.getParam('ano',''),
            placa: navigation.getParam('placa',''),
            cor: navigation.getParam('cor',''),
            proprietario: navigation.getParam('proprietario',''),
            mecanico: navigation.getParam('mecanico',''),
            data: navigation.getParam('data','')

        }
    }


    render() {
        const { navigation } = this.props;
        return (
            <LinearGradient colors={['#e35d5b', '#e53935']}>
                <View>
                    <View>
                        <Text style={{fontSize: 25, margin: 20, textAlign: 'center', color: 'white'}}>
                            Editar Carro
                        </Text>
                        <TextInput onChangeText={(text) => this.setState({marca: text})} placeholder={'Marca'} value={this.state.marca} style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({ano: text})} placeholder={'Ano'} value={this.state.ano} style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({placa: text})} placeholder={'Placa'} value={this.state.placa} style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({cor: text})} placeholder={'Cor'} value={this.state.cor} style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({proprietario: text})} placeholder={'Proprietário'} value={this.state.proprietario} style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({mecanico: text})} placeholder={'Mecânico'} value={this.state.mecanico} style={styles.Input}/>
                        <TextInput onChangeText={(text) => this.setState({data: text})} placeholder={'Data'} value={this.state.data} style={styles.Input}/>
                    </View>
                    <Button
                        title="Atualizar"
                        onPress={() => {
                            Home.setAdd();
                            this.props.navigation.navigate('Home', {
                                marca: this.state.marca,
                                ano: this.state.ano,
                                placa: this.state.placa,
                                cor: this.state.cor,
                                proprietario: this.state.proprietario,
                                mecanico: this.state.mecanico,
                                data: this.state.data
                            });
                        }}
                    />
                </View>
            </LinearGradient>
        );
    }
}

export default EditCar;