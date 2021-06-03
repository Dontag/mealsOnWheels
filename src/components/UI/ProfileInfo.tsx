import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import TextInputUI from './TextInput'
import { useState } from "react";
import { colors } from '../../utilities/colors';


const ProfileInfo = () => {
    const [name, setName] = useState();
    const [mail, setMail] = useState();
    const [address, setAddress] = useState();

    const onChangeName = (name) => {
        setName(name);
    };

    const onChangeMail = (mail) => {
        setMail(mail);
    };

    const onChangeAddress = (address) => {
        setAddress(address);
    }

    const resetValues = () => {
        setName("");
        setMail("");
        setAddress("");
    }

    const addProfileOnSubmit = async () => {
        console.log("Add profile to database.............")
        const values = {
            name: name,
            mail: mail,
            address: [
                {
                    addressLine: address,
                    status: false
                }
            ]
        }

        const apiCall = await fetch("http://192.168.1.3:5000/userProfile", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-type": "application/json"
            },
        });
        const data = await apiCall.json();
        console.log("data from apiCall = ", data);
        resetValues();
    }

    return (
        <View>
            <Text>This is profile info tab</Text>
            <Text style={styles.label}>Name</Text>
            <TextInputUI
                // label="Name"
                // labelStyle={styles.label}
                value={name}
                onChangeText={onChangeName}
                width={"lg"}
                height={60}
                backgroundColor={colors.lightGrayishCyan}
                placeholder={"Name"}
                placeholderTextColor={`${colors.black}98`}
                textInputStyles={{ color: colors.veryDarkDesaturatedBlue, fontFamily: 'Lato-Italic' }}
                inputBorderR={10}
                elevation={20}
            />
            <Text style={styles.label}>Mail</Text>
            <TextInputUI
                value={mail}
                onChangeText={onChangeMail}
                width={"lg"}
                height={60}
                backgroundColor={colors.lightGrayishCyan}
                placeholder={"Mail"}
                placeholderTextColor={`${colors.black}98`}
                textInputStyles={{ color: colors.veryDarkDesaturatedBlue, fontFamily: 'Lato-Italic' }}
                inputBorderR={10}
                elevation={20}
            />
            <Text style={styles.label}>Address</Text>
            <TextInputUI
                value={address}
                onChangeText={onChangeAddress}
                width={"lg"}
                height={60}
                backgroundColor={colors.lightGrayishCyan}
                placeholder={"Address"}
                placeholderTextColor={`${colors.black}98`}
                textInputStyles={{ color: colors.veryDarkDesaturatedBlue, fontFamily: 'Lato-Italic' }}
                inputBorderR={10}
                elevation={20}
            />
            <View style={styles.button}>
                <View style={styles.save_cancel_button}>
                    <Button
                        onPress={() => addProfileOnSubmit()}
                        title="save"
                    />
                </View>
                <View style={styles.save_cancel_button}>
                    <Button
                        onPress={() => resetValues()}
                        title="cancel"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    label: {
        display: "flex",
        justifyContent: "space-around",
        marginVertical: 10,
        fontSize: 18
    },
    button: {
        width: 350,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 20,
        // borderWidth: 2
    },
    save_cancel_button: {

    }

});

export default ProfileInfo;
