import React, {Component} from 'react';
import {View, Text, Button, TextInput, Image, ScrollView} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Carro from '../componentes/Carro'

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
        this.adicionaCarro = this.adicionaCarro.bind(this);
        this.edita = this.edita.bind(this);
        this.deleta = this.deleta.bind(this);
    }
    adicionaCarro(){
        const { navigation } = this.props;
        this.setState({carros: [...this.state.carros,
                {
                    marca: navigation.getParam('marca','default'),
                    ano: navigation.getParam('ano','default'),
                    placa: navigation.getParam('placa','default'),
                    cor: navigation.getParam('cor','default'),
                    proprietario: navigation.getParam('proprietario','default'),
                    mecanico: navigation.getParam('mecanico','default'),
                    data: navigation.getParam('data','default')
                } ]});
    }

    edita(indice){
        let beforeCarro = this.state.carros[indice];
        let carros = [...this.state.carros];
        carros.splice(indice, 1);
        this.setState({carros: carros});
        this.props.navigation.push('EditCar', beforeCarro);
        console.log(this.add)
    }

    static setAdd(){
        this.add = true;
        console.log("chamou");
    }

    deleta(indice){
        var carros = [...this.state.carros];
        carros.splice(indice, 1);
        this.setState({carros: carros});
    }

    render(){
        const { navigation } = this.props;
        let carro = {
            marca: navigation.getParam('marca',''),
            ano: navigation.getParam('ano',''),
            placa: navigation.getParam('placa',''),
            cor: navigation.getParam('cor',''),
            proprietario: navigation.getParam('proprietario',''),
            mecanico: navigation.getParam('mecanico',''),
            data: navigation.getParam('data','')
        };

        if ( JSON.stringify(carro) !== JSON.stringify(this.before) || this.add === true){
            this.adicionaCarro();
        }
        this.add = false;

        this.before = carro;

        let n = this.state.carros.map((obj,idx)=>{
            return <Carro indice={idx} key={idx} marca={obj.marca} ano={obj.ano} placa={obj.placa} onEditar={this.edita}
            onDeletar={this.deleta}/>
        });

        //console.log(this.state);
        return(
            <LinearGradient colors={['#e35d5b', '#e53935']}>
            <View>
                <View style={{margin: 30}}>
                    <Button
                        title="Adicionar Carro" onPress={() => this.props.navigation.push('AddCar')}
                    />
                </View>
                <ScrollView>
                    {n}
                </ScrollView>
            </View>
            </LinearGradient>
        )
    }
}

export default Home;
