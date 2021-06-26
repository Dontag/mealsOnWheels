import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeightWidth from '../../utilities/HeightWidth';
import { colors, Width } from '../../utilities/utilities';

interface BaseHeaderProps {
    onPress: VoidFunction;
    title: string;
}

const BaseHeader = ({ onPress, title }: BaseHeaderProps) => {
    return (
        <View style={styles.__container}>
            <TouchableOpacity onPress={onPress} style={styles.__leftHeaderIcon}>
                <Icon name={"chevron-left"} size={30} color={colors.black} />
            </TouchableOpacity>
            <View style={styles.__innerContainer}>
                <Text style={styles.__headerLabel} >{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    __container: {
        height: HeightWidth.getResWidth(60),
        backgroundColor: colors.offWhite,
        flexDirection: "row",
        width: Width,
        alignItems: "center",
        paddingHorizontal: HeightWidth.getResWidth(10),
    },
    __leftHeaderIcon: {
        borderRadius: 60,
        width: HeightWidth.getResWidth(35),
        height: HeightWidth.getResWidth(35),
        justifyContent: "center",
        alignItems: "center",
    },
    __innerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingRight: HeightWidth.getResWidth(35)
    },
    __headerLabel: {
        fontSize: 20,
        fontFamily: "Lato-Regular",
        color: colors.black
    },
})

export default BaseHeader;