import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import List from './screens/List';

const Stack = createStackNavigator();

export default function App() {
return <NavigationContainer>
  <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
</NavigationContainer>;
} 