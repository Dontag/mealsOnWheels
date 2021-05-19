import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface Tab {
    name: string;
}

interface Props {
    color: string;
    onPress: VoidFunction;
    tab: Tab;
    icon: string;
}

const CustomTab = ({ color, onPress, tab, icon }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.__container}>
            {icon && <Icon name={icon} size={25} color={color} />}
            <Text style={[styles.__tabText, { color }]}> {tab.name} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    __container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
    },
    __tabText: {
        fontFamily: "Lato-Regular",
        fontSize: 14
    }
})

export default CustomTab;
