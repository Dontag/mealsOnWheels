import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    leftIconSize?: number,
    leftText?: string,
    leftIconColor?: string,
    leftIconName?: string,
    leftIconStyle?: object,
    rightIconSize?: number,
    rightIconColor?: string,
    rightIconName?: string,
    width?: number,
    height?: number,
    backgroundColor?: string,
    elevation?: number,
    size?: string,
    borderRadius?: number,
    title: string,
    textStyles?: any,
    onPress: VoidFunction,
    otherStyle?: object,
    activityIndicator?: boolean,
    disabled?: boolean,
    leftTextStyle?: object,
    enableLinear?: boolean,
    linearColor1?: string,
    linearColor2?: string,
}

//utilities
import { Width, colors } from '../../utilities/utilities'

const __btnsm = {
    width: Width / 2,
    height: 50
}
const __btnmd = {
    width: Width / 2 + 50,
    height: 55
}
const __btnlg = {
    width: Width - 50,
    height: 60
}

const ButtonUI = ({
    size = "sm",
    width,
    backgroundColor = colors.brightRed,
    elevation = 1,
    borderRadius = 2,
    height,
    onPress,
    otherStyle,
    disabled = false,
    enableLinear = false,
    linearColor1 = colors.softRed,
    linearColor2 = colors.brightRed,
    title,
    leftText,
    leftIconSize,
    leftIconColor,
    leftIconName,
    leftIconStyle,
    rightIconSize,
    rightIconColor,
    rightIconName,
    textStyles,
    activityIndicator = false,
    leftTextStyle,
}: Props) => {
    const ButtonInnerContain = () => {
        return (
            <>
                {!activityIndicator ? <>
                    {leftIconName ? <View style={[styles.__leftIconView, { ...leftIconStyle }]}>
                        <Icon size={leftIconSize} color={leftIconColor} name={leftIconName} />
                    </View> : null}
                    {leftText ? <Text style={[styles.__leftTextView, { ...leftTextStyle }]}>
                        {leftText}
                    </Text> : null}
                    <View style={styles.__textView}>
                        <Text numberOfLines={1} style={[styles.__text, { ...textStyles }]}> {title} </Text>
                    </View>
                    {rightIconName ? <View style={styles.__rightIconView}>
                        <Icon size={rightIconSize} color={rightIconColor} name={rightIconName} />
                    </View> : null}
                </> :
                    <ActivityIndicator size={"small"} color={colors.white} />
                }
            </>
        )
    }

    return (
        <>
            {!enableLinear ? <TouchableOpacity
                disabled={disabled}
                style={[styles.__buttonContainer,
                size === "sm" ? __btnsm :
                    size === "md" ? __btnmd :
                        size === "lg" ? __btnlg :
                            null,
                { backgroundColor: backgroundColor, elevation: elevation, borderRadius: borderRadius },
                width ? { width: width } : null, height ? { height: height } : null,
                { ...otherStyle }
                ]}
                onPress={onPress}
            >
                {ButtonInnerContain()}
            </TouchableOpacity> :
                <TouchableOpacity disabled={disabled} onPress={onPress}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[linearColor1, linearColor2]}
                        style={[styles.__buttonContainer,
                        size === "sm" ? __btnsm :
                            size === "md" ? __btnmd :
                                size === "lg" ? __btnlg :
                                    null,
                        { backgroundColor: backgroundColor, elevation: elevation, borderRadius: borderRadius },
                        width ? { width: width } : null, height ? { height: height } : null,
                        { ...otherStyle }
                        ]}>
                        {ButtonInnerContain()}
                    </LinearGradient>
                </TouchableOpacity>
            }
        </>
    )
}

const styles = StyleSheet.create({
    __buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        overflow: "hidden"
    },
    __leftIconView: {
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    __leftTextView: {
        paddingHorizontal: 10,
        color: colors.brightRed,
        fontSize: 16
    },
    __textView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    __text: {
        fontSize: 17,
        fontFamily: "Lato-Regular"
    },
    __rightIconView: {
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default ButtonUI;
