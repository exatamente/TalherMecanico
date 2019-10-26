import React, {Component} from 'react';
import{
    View,
    Text,
    Button
} from 'react-native';

class carro extends Component {
    constructor(props){
        super(props);
        this.editar = this.editar.bind(this);
        this.deletar = this.deletar.bind(this);
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


    render() {
        return (
            <View style={{paddingLeft: 10, flexDirection: 'row'}}>
                <Text style={{flexGrow: 1, color: 'white'}}>{this.props.marca} - {this.props.ano}</Text>
                <Text style={{flexGrow: 1, color: 'white'}}>{this.props.placa}</Text>
                <View style={{marginRight: 10}}>
                    <Button onPress={this.editar} title={"E"}/>
                </View>
                <View style={{marginRight: 10}}>
                    <Button onPress={this.deletar} title={"D"}/>
                </View>
            </View>
        );
    }
}

export default carro;