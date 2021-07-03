import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//?Screens
import Dashboard from './src/screens/home/dashboard';
import Login from './src/screens/auth/login';
import DishDetails from './src/components/UI/ProfileDetails';
import PaymentScreen from './src/components/UI/PaymentScreen';
import CartScreen from './src/components/UI/CardScreen';
import ItemBox from './src/components/UI/CardScreen';

const Tab = createMaterialBottomTabNavigator();
const App = () => {

  const bottomTabContainer = () =>
    <Tab.Navigator initialRouteName={"Dashboard"}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color }) => (
            <Icon name="log-in-outline" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarLabel: 'Payment',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-body" color={color} size={26} />
          )
        }}
      />
    <Tab.Screen
        name="Delete"
        component={CartScreen}
        options={{
          tabBarLabel: 'Delete',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-body" color={color} size={26} />
          )
        }}
      />

    </Tab.Navigator>

  return (
    <NavigationContainer>
      <StatusBar />
      {bottomTabContainer()}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default App;