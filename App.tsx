import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//?Screens
import Login from './src/screens/auth/login';
import BottomTabStack from './src/BottomTabStack';

//?Stacks
const authStack = createStackNavigator();
const mainStack = createStackNavigator();

const App = () => {


  const createAuthStack = () =>
    <authStack.Navigator initialRouteName="SplashScreen">
      {/* <authStack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
      <authStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </authStack.Navigator>

  const createMainStack = () =>
    <mainStack.Navigator initialRouteName="homeStack">
      <mainStack.Screen name={"authStack"} component={createAuthStack} options={{ headerShown: false }} />
      <mainStack.Screen name={"homeStack"} component={BottomTabStack} options={{ headerShown: false }} />
    </mainStack.Navigator>

  return (
    <NavigationContainer>
      <StatusBar />
      {createMainStack()}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default App;