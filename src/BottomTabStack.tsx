import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

//?Screens
import Dashboard from './screens/home/dashboard';
import CustomTabBar from './components/CustomTab/CustomTabBar';
import Login from './screens/auth/login';

const BottomTabStack = () => {

    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            initialRouteName={"Dashboard"}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                initialParams={{ icon: 'home' }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                initialParams={{ icon: 'log-in-outline' }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})

export default BottomTabStack;