import React from 'react';
import { Dimensions } from 'react-native';
export default class HeightWidth extends React.Component {
    static getResWidth = width => {
        var width = Math.round(Dimensions.get('window').width * (width / 375));
        return width;
    };
    static getResHeight = height => {
        var height = Math.round(Dimensions.get('window').height * (height / 1011));
        return height;
    };
    static getResFontSize = fontSize => {
        var fontSize =
            100 * (fontSize / Math.round(Dimensions.get('window').fontScale));
        return fontSize;
    };
}
