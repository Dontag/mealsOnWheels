import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utilities/utilities';

const Login = () => {
    return (
        <View style={styles.__container}>
            <Text>This is Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    __container: {
        flex: 1,
        backgroundColor: colors.white
    },
});

export default Login;
