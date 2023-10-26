import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import NewBook from './NewBook';

const Stack = createStackNavigator();

const AppNavigator = createAppContainer(
  <Stack.Navigator initialRouteName="App">
    <Stack.Screen name="App" component={App} />
    <Stack.Screen name="NewPage" component={NewBook} />
  </Stack.Navigator>
);

export default AppNavigator;
