import React, {Component} from 'react';
import {View, Text, Button, TextInput, Image, ScrollView} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import carro from '../componentes/carro'

class Home extends Component{

    constructor(props) {
        super(props);
        this.before = {
            marca: '',
            ano: '',
            placa: '',
            cor: '',
            proprietario: '',
            mecanico: '',
            data: ''
        };
        this.state = {carros: []}
        this.adicionaCarro = this.adicionaCarro.bind(this);
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

        if ( JSON.stringify(carro) !== JSON.stringify(this.before) ){
            this.adicionaCarro();
        }

        this.before = carro;

        //let n = this.state.carros.map((x,idx)=>{
        //    return <carro indice={idx} key={idx} titulo={x} onDeletar={this.adicionaCarro}></carro>
        //});

        console.log(this.state);
        return(
            <LinearGradient colors={['#e35d5b', '#e53935']}>
            <View>
                <View style={{margin: 30}}>
                    <Button
                        title="Adicionar Carro" onPress={() => this.props.navigation.push('AddCar')}
                    />
                </View>
                <View>
                <Text>
                    marca:
                    {JSON.stringify(navigation.getParam('marca', 'default value'))}
                </Text>
                <Text>
                    nome:
                    {JSON.stringify(navigation.getParam('nome', 'default value'))}
                </Text>
                </View>
                {/*<ScrollView>*/}
                {/*    {n}*/}
                {/*</ScrollView>*/}
            </View>
            </LinearGradient>
        )
    }
}

export default Home;

/* <Button
    title="Login"
    onPress={() => this.props.navigation.push('Login')}
/> */

