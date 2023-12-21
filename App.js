import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import ItemDetailsScreen from './src/screens/ItemDetailsScreen';
import LoginScreen from './src/screens/LoginScreen';


export default function App() {

  const Stack = createNativeStackNavigator();
    
  return (
    <NavigationContainer name="Clothes Store"> 
      <Stack.Navigator initialRouteName='Login' >
      <Stack.Screen   name='Home' component={HomeScreen}  />
      <Stack.Screen   name='Login' component={LoginScreen}  />
      <Stack.Screen name='ItemDetailsScreen' component={ItemDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


