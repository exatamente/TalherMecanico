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
        this.edita = this.edita.bind(this);
        this.deleta = this.deleta.bind(this);
        this.adicionar= this.adicionar.bind(this);
        this.continuaAdicionar = this.continuaAdicionar.bind(this);
    }


    edita(indice){
        let beforeCarro = this.state.carros[indice];
        //this.deleta(indice);
        const { navigation } = this.props;
        this.props.navigation.push('EditCar', beforeCarro);
        let carro = {
            marca: navigation.getParam('marca',''),
            ano: navigation.getParam('ano',''),
            placa: navigation.getParam('placa',''),
            cor: navigation.getParam('cor',''),
            proprietario: navigation.getParam('proprietario',''),
            mecanico: navigation.getParam('mecanico',''),
            data: navigation.getParam('data','')
        };
        var carros = [...this.state.carros];
        carros[indice]  = carro;
        this.setState({carros: carros});
        console.log("passou");

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
        this.setState({carros: {...carros, novoCarro}});
    }

    render(){

        // if ( JSON.stringify(carro) !== JSON.stringify(this.before) || this.add === true){
        //     this.adicionaCarro();
        //     console.log("Entrou no if")
        // }

        // if ( JSON.stringify(carro) !== JSON.stringify(this.before)){
        //     console.log(JSON.stringify(carro), JSON.stringify(this.before));
        //     if (this.add === false) {
        //         this.adicionaCarro();
        //         console.log("PASSOU NO IF");
        //     }
        //      else if (this.add === true){
        //         console.log(JSON.stringify(carro) !== JSON.stringify(this.before));
        //         console.log("PASSOU NO ELSE IF");
        //         this.adicionaCarro();
        //     }
        // }else if(this.add === true){
        //     this.adicionaCarro();
        //
        // }

        this.add = false;

        //this.before = carro;

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
                            title="Adicionar Carro" onPress={this.adicionar}
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