import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import CartScreen from './src/screens/app/cartPage';
import DetailScreen from './src/screens/app/ProdcutDetail';
import Smartphones from './src/screens/app/SmartPhones';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='DetailScreen' component={DetailScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Smart Phones' component={Smartphones} options={{ headerShown: false }} />
          <Stack.Screen name='CartScreen' component={CartScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default App;