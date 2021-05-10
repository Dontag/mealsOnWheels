import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import TextInputUI from '../../components/UI/TextInput';
import { colors } from '../../utilities/colors';
import HeightWidth from '../../utilities/HeightWidth';

const Dashboard = () => {

    const [name, setName] = useState('');

    const onChange = (text) => {
        setName(text)
    }
    return (
        <View style={styles.__container}>
            <View style={styles.__textInput}>
                <TextInputUI
                    leftIconColor={colors.black}
                    leftIconName={"search"}
                    leftIconSize={26}
                    width={"lg"}
                    height={60}
                    value={name}
                    onChangeText={onChange}
                    backgroundColor={colors.lightGrayishCyan}
                    placeholder={"Search"}
                    placeholderTextColor={`${colors.black}98`}
                    textInputStyles={{ color: colors.veryDarkDesaturatedBlue, fontFamily: 'Lato-Italic' }}
                    inputBorderR={10}
                    elevation={20}
                />
                <Text style={styles.__text}>

                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    __container: {
        flex: 1,
        backgroundColor: colors.white
    },
    __textInput: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: HeightWidth.getResWidth(20)
    },
    __text: {
        color: colors.veryDarkDesaturatedBlue
    }
})
export default Dashboard;