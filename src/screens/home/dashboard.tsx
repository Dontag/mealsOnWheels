import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Props } from '../../common/interfaces/commonInterface';
import ButtonUI from '../../components/UI/Button';

//? Components
import TextInputUI from '../../components/UI/TextInput';

//? Utilities
import { colors } from '../../utilities/colors';
import HeightWidth from '../../utilities/HeightWidth';

const Dashboard = ({ navigation, route }: Props) => {

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
                <View style={styles.__button}>
                    <ButtonUI
                        onPress={() => { navigation.navigate("Schedule") }}
                        title={"Schedule"}
                        backgroundColor={colors.vividOrange}
                        elevation={5}
                        borderRadius={10}
                        height={HeightWidth.getResWidth(55)}
                        textStyles={{ color: colors.white }}
                    />
                </View>
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
        marginVertical: HeightWidth.getResWidth(20),
    },
    __text: {
        color: colors.veryDarkDesaturatedBlue
    },
    __button: {
        marginTop: 10
    }
})
export default Dashboard;