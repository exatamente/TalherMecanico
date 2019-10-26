import React, {Component} from 'react';
import {View, Text, Button, TextInput, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Carro from '../componentes/Carro'
import styles from "../stylesheets/homeStyle";

class Home extends Component{

    constructor(props) {
        super(props);
        this.add = false;
        this.before = {
            marca: '',
            ano: '',
            placa: '',
            cor: '',
            proprietario: '',
            mecanico: '',
            data: ''
        };
        this.state = {carros: []};
        this.edita = this.edita.bind(this);
        this.deleta = this.deleta.bind(this);
        this.adicionar= this.adicionar.bind(this);
        this.continuaAdicionar = this.continuaAdicionar.bind(this);
        this.continuaEditar = this.continuaEditar.bind(this);
    }


    edita(indice){
        var carro = this.state.carros[indice];
        this.props.navigation.push('EditCar', {carro: carro, continuaEditar: this.continuaEditar});
        var carros = [...this.state.carros];
        carros.splice(indice, 1);
        this.setState({carros: carros});
    }


    continuaEditar(editaCarro) {
        var carros = [...this.state.carros];
        this.setState({carros: [...carros, editaCarro]});
    }


    deleta(indice){
        var carros = [...this.state.carros];
        carros.splice(indice, 1);
        this.setState({carros: carros});
    }

    adicionar(){
        const { navigation } = this.props;
        navigation.push('AddCar', {continua: this.continuaAdicionar});
    }

    continuaAdicionar(novoCarro){
        var carros = [...this.state.carros];
        this.setState({carros: [...carros, novoCarro]});
    }

    render(){

        let ScreenHeight = Dimensions.get("window").height;

        let n = this.state.carros.map((obj,idx)=>{
            return <Carro indice={idx} key={idx} marca={obj.marca} ano={obj.ano} placa={obj.placa} onEditar={this.edita}
                          onDeletar={this.deleta}/>
        });

        return(
            <LinearGradient colors={['#e35d5b', '#e53935']}>
                <View style={{height: ScreenHeight}}>
                    <View style={{paddingLeft:10}}>
                        <Text style={{paddingTop: 40, color: 'white', fontSize: 20, textAlign: 'center', paddingBottom: 15}}>Marca - Ano / Placa</Text>
                    </View>
                    <ScrollView>
                        {n}
                    </ScrollView>
                    <View style={{alignItems: 'center'}}>
                        <View style={{position: 'absolute', bottom: 45, width: 240}}>
                            <TouchableOpacity style={styles.Button} activeOpacity = {.5} onPress={this.adicionar}>
                                <Text>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

export default Home;