import React from 'react';
import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? getStatusBarHeight() + 5 : StatusBar.currentHeight;

const CustomStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT
    }
});

export default CustomStatusBar;