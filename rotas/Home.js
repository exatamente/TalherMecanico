import React, {Component} from 'react';
import {View, Text, Button, TextInput, Image, ScrollView, Dimensions, TouchableOpacity, BackHandler, Alert, StatusBar } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Carro from '../componentes/Carro'
import styles from "../stylesheets/homeStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions, withNavigationFocus  } from 'react-navigation';


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
        this.state = {carros: []};
        this.edita = this.edita.bind(this);
        this.deleta = this.deleta.bind(this);
		this.visualiza = this.visualiza.bind(this);
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

    visualiza(indice){
        var carro = this.state.carros[indice];
        this.props.navigation.push('ViewCar', {carro: carro, continuaEditar: this.continuaEditar});
        var carros = [...this.state.carros];
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
	
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}

	handleBackButton = () => {
		if (this.props.navigation.isFocused()) {
			Alert.alert('Talher Mecânico','Você tem certeza que deseja sair do Aplicativo?',
				[
					{
					text: 'Cancelar',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
					},
					{
					text: 'Sim',
					onPress: () => BackHandler.exitApp()
					}
				],
				
				{
				  cancelable: false
				}
			
			);
			return true;
		}
	};

	
    render(){

        let ScreenHeight = Dimensions.get("window").height;

        let n = this.state.carros.map((obj,idx)=>{
            return <Carro indice={idx} key={idx} marca={obj.marca} ano={obj.ano} placa={obj.placa} onEditar={this.edita}
                          onDeletar={this.deleta} onVisualizar={this.visualiza}/>
        });
		
		if (!n.length) {
			n = <Text style={styles.Empty}>A lista de carros se encontra vazia!</Text>;
		}
		
        return(
            <LinearGradient colors={['#e35d5b', '#e53935']}>
                <StatusBar backgroundColor="#eea849" />
                <View style={{height: ScreenHeight}}>
                    <ScrollView>
                        {n}
                    </ScrollView>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.Button} activeOpacity = {.5} onPress={this.adicionar}>
                                <Icon style={styles.Icon} name="plus" size={30} color="white"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

export default Home;