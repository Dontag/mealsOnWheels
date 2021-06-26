import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//?Screens
import Login from './src/screens/auth/login';
import BottomTabStack from './src/BottomTabStack';
import Schedule from './src/screens/home/schedules/schedule';
import { colors } from './src/utilities/colors';

//?Stacks
const authStack = createStackNavigator();
const mainStack = createStackNavigator();
const scheduleStack = createStackNavigator();

const App = () => {


  const createAuthStack = () =>
    <authStack.Navigator initialRouteName="SplashScreen">
      {/* <authStack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
      <authStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </authStack.Navigator>

  const createScheduleStack = () =>
    <scheduleStack.Navigator initialRouteName="Schedule">
      <scheduleStack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
    </scheduleStack.Navigator>

  const createMainStack = () =>
    <mainStack.Navigator initialRouteName="homeStack">
      <mainStack.Screen name={"authStack"} component={createAuthStack} options={{ headerShown: false }} />
      <mainStack.Screen name={"homeStack"} component={BottomTabStack} options={{ headerShown: false }} />
      <mainStack.Screen name={"Schedule"} component={createScheduleStack} options={{ headerShown: false }} />
    </mainStack.Navigator>

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.offWhite} barStyle={"dark-content"} />
      {createMainStack()}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default App;