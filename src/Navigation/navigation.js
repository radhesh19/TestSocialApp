import React from 'react';
import Feeds from '../Screens/Feeds';
import CreateFeeds from '../Screens/CreateFeeds'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootNaviagtion() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feeds" component={Feeds} />
        <Stack.Screen name="Create Feed" component={CreateFeeds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNaviagtion;