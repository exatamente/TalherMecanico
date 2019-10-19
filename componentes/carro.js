import React, {Component} from 'react';
import{
    View,
    Text,
    Button
} from 'react-native';

class carro extends Component {
    constructor(props){
        super(props);
        this.clicou = this.clicou.bind(this);
    }

    clicou(){
        if(this.props.onDeletar!=null){
            this.props.onDeletar(this.props.indice);
        }
    }


    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Text style={{flexGrow: 1}}>{this.props.marca}</Text>
                <Text style={{flexGrow: 1}}>{this.props.placa}</Text>
                <Button onPress={this.clicou} title={"Editar"}/>
            </View>
        );
    }
}

export default carro;
