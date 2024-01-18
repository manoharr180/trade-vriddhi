import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import ItemDetailsScreen from './src/screens/ItemDetailsScreen';
import LoginScreen from './src/screens/LoginScreen';
import CartScreen from './src/screens/CartScreen';
import MenuScreen from './src/screens/MenuScreen';
import AccountScreen from './src/screens/AccountScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { AppProvider } from './src/StoreContext/AppConextProvider';


 const App = () => {

  const Stack = createNativeStackNavigator();
    
  return (
    <NavigationContainer name="Clothes Store"> 
      <Stack.Navigator initialRouteName='Login' >
      <Stack.Screen   name='Home' component={HomeScreen}  />
      <Stack.Screen   name='Login' component={LoginScreen}  />
      <Stack.Screen   name='Cart' component={CartScreen}  />
      <Stack.Screen   name='Menu' component={MenuScreen}  />
      <Stack.Screen   name='Account' component={AccountScreen}  />
      <Stack.Screen   name='Register' component={RegisterScreen}  />
      <Stack.Screen name='ItemDetailsScreen' component={ItemDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default () =>{
  return <AppProvider>
    <App/>
  </AppProvider>
}

