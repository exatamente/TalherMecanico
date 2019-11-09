import React, {Component} from 'react';
import{
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../stylesheets/carroStyle";

class Carro extends Component {
    constructor(props){
        super(props);
        this.editar = this.editar.bind(this);
        this.deletar = this.deletar.bind(this);
		this.visualizar = this.visualizar.bind(this);
    }

    editar(){
        if(this.props.onEditar!=null){
            this.props.onEditar(this.props.indice);
        }
    }

    deletar(){
        if(this.props.onDeletar!=null){
            this.props.onDeletar(this.props.indice);
        }
    }
	
	visualizar(){
        if(this.props.onVisualizar!=null){
            this.props.onVisualizar(this.props.indice);
        }
    }

    render() {
        return (
            <View style={styles.List}>
				<View style={{flexDirection: 'row'}}>
					<Text style={styles.Title}>Carro</Text>
					<Text style={styles.Title}>Ano</Text>
					<Text style={styles.Title}>Placa</Text>
				</View>
				<View style={{flexDirection: 'row'}}>
					<Text style={styles.Text}>{this.props.marca}</Text>
					<Text style={styles.Text}>{this.props.ano}</Text>
					<Text style={styles.Text}>{this.props.placa}</Text>
				</View>
                <View style={{marginTop: 10, marginRight: 10, flexDirection: 'row',}}>
                	<TouchableOpacity style={styles.Edit} activeOpacity = {.5} onPress={this.editar}>
						<Icon style={{paddingRight: 1, paddingTop: 6, alignItems: 'center'}} name="pencil" size={23} color="white"/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.View} activeOpacity = {.5} onPress={this.visualizar}>
						<Icon style={{paddingRight: 1, paddingTop: 5, alignItems: 'center'}} name="eye" size={23} color="white"/>
					</TouchableOpacity>
                	<TouchableOpacity style={styles.Remove} activeOpacity = {.5} onPress={this.deletar}>
						<Icon style={{paddingRight: 1, paddingTop: 6, alignItems: 'center'}} name="trash" size={23} color="white"/>
					</TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Carro;