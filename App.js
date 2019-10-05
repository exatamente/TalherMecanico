import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack'
import Login from './rotas/Login';
import Home from './rotas/Home'

/* Objeto que mapeia as paginas */
let navegador = createStackNavigator({
    Login: {screen: Login},
    Home: {screen: Home},
},{
    headerMode: "none"
});

/* Aplicativo transformado em react native */
let App = createAppContainer(navegador);

export default App;