import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import Login from './rotas/Login';
import Home from './rotas/Home';
import AddCar from './rotas/AddCar';
import EditCar from './rotas/EditCar';

/* Objeto que mapeia as paginas */
let navegador = createStackNavigator({
    Login: {screen: Login},
    Home: {screen: Home},
    AddCar: {screen: AddCar},
    EditCar: {screen: EditCar}
},{
    headerMode: "none"
});

/* Aplicativo transformado em react native */
let App = createAppContainer(navegador);

export default App;