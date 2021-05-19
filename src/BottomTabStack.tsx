import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

//?Screens
import Dashboard from './screens/home/dashboard';
import Login from './screens/auth/login';
import { colors } from './utilities/colors';

const BottomTabStack = () => {

    return (
        <Tab.Navigator
            activeColor={colors.vividOrange}
            inactiveColor={colors.veryLightgrayishRed}
            barStyle={styles.__tabBar}
            shifting
            initialRouteName={"Dashboard"}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color }) => (
                        <Icon name="log-in-outline" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    __tabBar: {
        backgroundColor: colors.white
    }
})

export default BottomTabStack;