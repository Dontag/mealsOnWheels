import React from 'react';
import { Text, StyleSheet, View, TextInput, StyleSheetProperties } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

//utilities
import { Width, colors } from '../../utilities/utilities';

interface Props {
    value: string,
    onChangeText: FunctionStringCallback,
    placeholder?: string,
    placeholderTextColor?: string,
    editable?: boolean,
    password?: boolean,
    keyboardType?: any,
    maxLength?: number,
    returnKeyTypes?: any,
    returnKeyLabels?: string,
    leftIconSize?: number,
    leftIconColor?: string,
    leftIconName?: string,
    rightIconSize?: number,
    rightIconColor?: string,
    rightIconName?: string,
    width?: any,
    inputBackground?: string,
    leftText?: string,
    onRightIconPress?: VoidFunction,
    backgroundColor?: string,
    elevation?: number,
    leftTextSize?: number,
    height?: number,
    inputBorderR?: number,
    textInputStyles?: any,
    otherStyle?: any,
    leftViewStyle?: any,
    labelSize?: number,
    labelColor?: string,
    labelStyle?: any,
    multiline?: boolean,
    autoFocus?: boolean,
    blurOnSubmit?: boolean,
    onSubmitEditing?: VoidFunction,
    autoCapitalize?: any,
    leftTextColor?: string,
    label?: string,
    refData?: VoidFunction,
}

const TextInputUI = ({
    value,
    onChangeText,
    placeholder,
    placeholderTextColor,
    editable = true,
    password = false,
    keyboardType = "default",
    maxLength = 200,
    returnKeyTypes = "default",
    returnKeyLabels = '',
    leftIconSize,
    leftIconColor,
    leftIconName,
    rightIconSize,
    rightIconColor,
    rightIconName,
    width = "sm",
    inputBackground = colors.transparent,
    leftText,
    onRightIconPress = () => { },
    backgroundColor = colors.transparent,
    leftTextColor = colors.veryDarkDesaturatedBlue,
    elevation = 0,
    height = 50,
    leftTextSize = 17,
    inputBorderR = 1,
    textInputStyles,
    otherStyle,
    leftViewStyle,
    label,
    labelSize = 16,
    labelColor = colors.brightRed,
    labelStyle,
    multiline = false,
    autoFocus = false,
    blurOnSubmit = true,
    onSubmitEditing = () => { },
    refData,
    autoCapitalize = "sentences"
}: Props) => {

    let currentWidth = width === "sm" ? Width / 2 + 10 :
        width === "md" ? Width / 2 + 60 :
            width === "lg" ? Width - 40 : Width

    return (
        <>
            {label ? <Text style={[{ fontSize: labelSize, color: labelColor, fontFamily: "Lato-Regular", }, { ...labelStyle }]}>{label}</Text> : null}
            <View style={[
                styles.__inputView,
                {
                    width: currentWidth,
                    height: height,
                    backgroundColor: backgroundColor,
                    elevation: elevation,
                    borderRadius: inputBorderR,
                    ...otherStyle
                },
            ]}>
                {leftIconName ? <View style={styles.__leftIconView}>
                    <Feather size={leftIconSize} color={leftIconColor} name={leftIconName} />
                </View> : null}
                {leftText ? <View style={[styles.__leftTextView, { ...leftViewStyle }]}>
                    <Text style={[{ color: leftTextColor, fontSize: leftTextSize, fontFamily: "Lato-Regular", }]}>{leftText}</Text>
                </View> : null}
                <View style={styles.__textInputView}>
                    <TextInput
                        ref={refData}
                        value={value}
                        style={[styles.__input, { backgroundColor: inputBackground, ...textInputStyles }]}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        placeholderTextColor={placeholderTextColor}
                        editable={editable}
                        secureTextEntry={password}
                        keyboardType={keyboardType}
                        maxLength={maxLength}
                        returnKeyType={returnKeyTypes}
                        returnKeyLabel={returnKeyLabels}
                        multiline={multiline}
                        blurOnSubmit={blurOnSubmit}
                        onSubmitEditing={onSubmitEditing}
                        autoFocus={autoFocus}
                        autoCapitalize={autoCapitalize}
                    />
                </View>
                {rightIconName ? <View style={styles.__rightIconView}>
                    <Feather size={rightIconSize} color={rightIconColor} name={rightIconName} onPress={onRightIconPress} />
                </View> : null}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    __inputView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        paddingLeft: 8,
    },
    __leftIconView: {
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 8,
        paddingRight: 8,
    },
    __textInputView: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 5
    },
    __input: {
        fontSize: 17,
        fontFamily: "Lato-Regular",
    },
    __rightIconView: {
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 8,
        paddingRight: 8,
    },
    __leftTextView: {
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 8,
        paddingRight: 8,
    },
});

export default TextInputUI;
