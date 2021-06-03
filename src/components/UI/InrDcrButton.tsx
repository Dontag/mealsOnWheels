import React from "react";

import RnIncrementDecrementBtn from 'react-native-increment-decrement-button';

interface Props {
    minVal: number,
    minreq: number,
    max: number,
    val: number,
    disableControl: boolean,
    disabledColor: string,
    activeColor: string,
    handleClick?: VoidFunction,
};

const InrDcrButton = ({
    minVal,
    minreq,
    max,
    val,
    disableControl = false,
    disabledColor,
    activeColor,
    handleClick,
}: Props) => {
    return (
        <RnIncrementDecrementBtn
            minVal={minVal}
            minreq={minreq}
            max={max}
            val={val}
            disableControl={disableControl}
            disabledColor={disabledColor}
            activeColor={activeColor}
            handleClick={handleClick}
            styleBtn={{ width: 30, height: 30 }}
            styleTextInput={{ width: 30, height: 30, backgroundColor: '#FF8C00' }}
            labelStyle={{ fontSize: 13, color: 'white' }}
        />
    );
}

export default InrDcrButton;