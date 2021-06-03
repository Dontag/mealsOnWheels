import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { colors, Width } from '../../utilities/utilities';


const Profile = ({ profileInfo }) => {

    return (
        <View style={styles.container}>
            <View style={styles.avartarContainer}>
                <Image
                    style={styles.avatar}
                    source={require("D://Rohit_Codes//React_Native//mealsOnWheels//assets//profile_photo.png")}
                />
                {/* <Text>caption of photot here</Text> */}
            </View>
            <View style={styles.profileInfoContainer}>
                <Text style={styles.profileName}>{profileInfo.name} </Text>
                <Text numberOfLines={1} style={styles.profileInfo}> {profileInfo.mail} </Text>
                <View style={ styles.line}/>
                <Text style={styles.profileInfo}> {profileInfo.phone} </Text>
                <View style={ styles.line}/>

                <Text style={styles.profileInfo}> {profileInfo.address} </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: Width-50,
        elevation: 10,
        padding: 10,
        backgroundColor: colors.white,
        // borderWidth: 4,
        borderRadius: 20,
        paddingVertical: 15
    },
    avartarContainer: {
        height: 80,
    },
    avatar: {
        height: 80,
        width: 80,
        marginRight: 20,
        borderRadius: 80,
    },
    profileInfoContainer: {
        justifyContent: "space-around",
        flex: 1
    },
    profileName: {
        fontSize: 25,
        fontFamily: "Lato-Regular",
        marginBottom: 10,
    },
    profileInfo: {
        // borderWidth:2,
        justifyContent: "space-around",
        fontFamily: "Lato-Regular",
        color: colors.veryDarkDesaturatedBlue,
        fontSize: 15
    },
    line: {
        height: 1,
        backgroundColor: colors.veryDarkGray,
        marginVertical: 8

    }
});

export default Profile;

