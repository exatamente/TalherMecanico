import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import Login from './rotas/Login';
import Home from './rotas/Home';
import AddCar from './rotas/AddCar';
import EditCar from './rotas/EditCar';
import ViewCar from './rotas/ViewCar';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Alert, TouchableOpacity} from 'react-native';

/* Objeto que mapeia as paginas */
let navegador = createStackNavigator({
    Login: {
		screen: Login,navigationOptions: {header: null}
	},
    Home: {
		screen: Home, navigationOptions: {title: 'Lista de Carros',
		headerLeft: (<Icon style={{paddingLeft: 15, paddingTop: 5, alignItems: 'center'}} name="car" size={30} color="black"/>),
		headerRight: (
				<TouchableOpacity activeOpacity = {.5}
					onPress={() => {
						Alert.alert("Bem-vindo à Área Administrativa", "Nesta página é possível adicionar, remover e editar carros!");
				}}>
					<Icon style={{paddingRight: 15, paddingTop: 5, alignItems: 'center'}} name="info-circle" size={35} color="#e35d5b"/>
				</TouchableOpacity>
			)
		}
	},
    AddCar: {
		screen: AddCar, navigationOptions: {title: 'Adicionar Novo Carro'}
	},
    EditCar: {
		screen: EditCar, navigationOptions: {title: 'Editando Carro',
		headerLeft: (<Icon style={{paddingLeft: 15, paddingTop: 5, alignItems: 'center'}} name="edit" size={30} color="black"/>)}	
	},
	ViewCar: {
		screen: ViewCar, navigationOptions: {title: 'Visualizando Carro'}
	}
});

/* Aplicativo transformado em react native */
let App = createAppContainer(navegador);

export default App;