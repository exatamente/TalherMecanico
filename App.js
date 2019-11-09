import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import Login from './rotas/Login';
import Home from './rotas/Home';
import AddCar from './rotas/AddCar';
import EditCar from './rotas/EditCar';
import React, {Component} from 'react';
import {View, Text, Button, TextInput, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Objeto que mapeia as paginas */
let navegador = createStackNavigator({
    Login: {screen: Login, navigationOptions: {header: null}},
    Home: {screen: Home, navigationOptions: {title: 'Lista de Carros',  headerLeft: (
		<Icon style={{paddingLeft: 15, paddingTop: 5, alignItems: 'center'}} name="home" size={30} color="black"/>
      ),}},
    AddCar: {screen: AddCar, navigationOptions: {title: 'Adicionar Novo Carro'}},
    EditCar: {screen: EditCar, navigationOptions: {title: 'Visualizando Carro',  headerLeft: (
		<Icon style={{paddingLeft: 15, paddingTop: 5, alignItems: 'center'}} name="search" size={30} color="black"/>
      ),}}
},{
    
});

/* Aplicativo transformado em react native */
let App = createAppContainer(navegador);

export default App;