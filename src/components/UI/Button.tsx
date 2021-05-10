import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

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

class ButtonUI extends Component {

    ButtonInnerContain = () => {
        const {
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
            activityIndicator,
            leftTextStyle,
        } = this.props;
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

    render() {
        const {
            size,
            width,
            backgroundColor,
            elevation,
            borderRadius,
            height,
            onPress,
            otherStyle,
            disabled,
            enableLinear,
            linearColor1,
            linearColor2
        } = this.props;
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
                    {this.ButtonInnerContain()}
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
                            {this.ButtonInnerContain()}
                        </LinearGradient>
                    </TouchableOpacity>
                }
            </>
        )
    }
}

ButtonUI.propTypes = {
    leftIconSize: PropTypes.number,
    leftText: PropTypes.string,
    leftIconColor: PropTypes.string,
    leftIconName: PropTypes.string,
    leftIconStyle: PropTypes.object,
    rightIconSize: PropTypes.number,
    rightIconColor: PropTypes.string,
    rightIconName: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    backgroundColor: PropTypes.string,
    elevation: PropTypes.number,
    size: PropTypes.string,
    borderRadius: PropTypes.number,
    title: PropTypes.string.isRequired,
    textStyles: PropTypes.any,
    onPress: PropTypes.any,
    otherStyle: PropTypes.object,
    activityIndicator: PropTypes.bool,
    disabled: PropTypes.bool,
    leftTextStyle: PropTypes.object,
    enableLinear: PropTypes.bool,
    linearColor1: PropTypes.string,
    linearColor2: PropTypes.string,
}

ButtonUI.defaultProps = {
    size: "sm",
    backgroundColor: colors.brightRed,
    elevation: 1,
    borderRadius: 2,
    activityIndicator: false,
    disabled: false,
    enableLinear: false,
    linearColor1: colors.softRed,
    linearColor2: colors.brightRed,
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
    },
    __rightIconView: {
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default ButtonUI;
