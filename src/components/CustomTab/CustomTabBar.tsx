import React, { Component, useState, useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native'

//components
import CustomTab from './CustomTab';

//utilities
import { Width, colors } from '../../utilities/utilities'
import HeightWidth from '../../utilities/HeightWidth';

const CustomTabBar = ({ state, navigation }) => {
    const [selectedTab, setSelectedTab] = useState<string>('Home');
    console.log("state---", state)
    useEffect(() => {
        setSelectedTab(selectedTab);
    }, [selectedTab])

    const renderColor = (currentTab) => {
        if (currentTab === selectedTab) {
            return colors.softRed
        } else {
            return colors.verySoftOrange
        }
    }

    const onHandelPress = (activeTab, index, key) => {
        console.log("Pressed", activeTab)
        if (state.index !== index) {
            setSelectedTab(activeTab);
            navigation.navigate(activeTab)
        }
    }

    return (
        <View style={styles.__wrapper}>
            <View style={styles.__container}>
                {
                    state.routes.map((route, index) => <CustomTab
                        tab={route}
                        icon={route.params.icon}
                        onPress={() => onHandelPress(route.name, index, route.key)}
                        color={renderColor(route.name)}
                        key={route.key}
                    />)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    __wrapper: {
        width: Width,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,

    },
    __container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.white,
        zIndex: 100,
        width: HeightWidth.getResWidth(Width),
    }
})

// const mapStateToProps = state => {
//     return {
//         setTabBehaviour: state.home.setTabBackBehaviourBoll,
//     };
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         setTabBarBehaviour: (setTabBackBehaviour) => dispatch(actions.setTabBehaviour(setTabBackBehaviour))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CustomTabBar)
export default CustomTabBar;