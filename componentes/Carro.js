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
            <View style={{flexDirection: 'row'}}>
                <Text style={{flexGrow: 1}}>{this.props.marca} - {this.props.ano}</Text>
                <Text style={{flexGrow: 1}}>{this.props.placa}</Text>
                <Button onPress={this.editar} title={"Editar"}/>
                <Button onPress={this.deletar} title={"Deletar"}/>
            </View>
        );
    }
}

export default carro;
