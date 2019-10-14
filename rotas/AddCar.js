import React, {Component} from 'react';
import {View, Text, Button,TextInput, Image,Alert} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import styles from '../stylesheets/AddStyle.js'

class AddCar extends Component {
    constructor(props){
        super(props)
        this.state = {
            marca: '',
            ano: '',
            proprietario: '',
            placa: '',
            data: '',
            cor: '',
            mecanico: ''

        }
    }


    render() {
        return (
            <LinearGradient colors={['#e35d5b', '#e53935']}>
            <View>
                <View>
                    <Text style={{fontSize: 25, margin: 20, textAlign: 'center', color: 'white'}}>
                        Adicionar Carro
                    </Text>
                    <TextInput onChangeText={(text) => this.setState({marca: text})} placeholder={'Marca'} style={styles.Input}/>
                    <TextInput onChangeText={(text) => this.setState({ano: text})} placeholder={'Ano'} style={styles.Input}/>
                    <TextInput onChangeText={(text) => this.setState({placa: text})} placeholder={'Placa'} style={styles.Input}/>
                    <TextInput onChangeText={(text) => this.setState({cor: text})} placeholder={'Cor'} style={styles.Input}/>
                    <TextInput onChangeText={(text) => this.setState({proprietario: text})} placeholder={'Proprietário'} style={styles.Input}/>
                    <TextInput onChangeText={(text) => this.setState({mecanico: text})} placeholder={'Mecânico'} style={styles.Input}/>
                    <TextInput onChangeText={(text) => this.setState({data: text})} placeholder={'Data'} style={styles.Input}/>
                </View>
                <Button
                    title="Send"
                    onPress={() => {
                        this.props.navigation.navigate('Home', {
                            nome: this.state.nome,
                        });
                    }}
                />
            </View>
            </LinearGradient>
        );
    }
}

export default AddCar;