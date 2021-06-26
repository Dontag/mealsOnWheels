import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Props } from '../../../common/interfaces/commonInterface';
import moment from 'moment';

//utilities
import { colors } from '../../../utilities/colors';

//components
import CustomScrollView from '../../../components/Other/CustomScrollView'
import BaseHeader from '../../../components/Header/BaseHeader';
import HeightWidth from '../../../utilities/HeightWidth';
import { Width } from '../../../utilities/utilities';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import ButtonUI from '../../../components/UI/Button';

const Schedule = ({ navigation, route }: Props) => {

    const [weekDayList, setWeekDayList] = useState([]);

    useEffect(() => {
        getCalenderData();
    }, [])

    const getCalenderData = () => {
        const todaysDate = moment().format();
        let weekDaysData = [];
        for (let i = 0; i < 7; i++) {
            const weekObj = {
                day: moment().add(i, 'days').format("ddd"),
                date: moment().add(i, 'days'),
            }
            weekDaysData.push(weekObj);
        }
        setWeekDayList(weekDaysData);
    }

    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.__dayContainer}>
                <Text style={styles.__dayTitle}>{moment(item.date).format("DD")}</Text>
                <Text style={styles.__daySubTitle}>{item.day}</Text>
            </View>
        )
    }

    const keyExtractor = (_, index) => String(index);

    return (
        <View style={styles.__container}>
            <BaseHeader
                onPress={() => { navigation.goBack() }}
                title={"Schedule"}
            />
            <CustomScrollView>
                <Text style={styles.__contentHeaderLabel}>
                    Schedule Tiffin
                </Text>
                <View style={styles.__innerTopContentView}>
                    <TouchableOpacity style={styles.__scheduleCalButton}>
                        <Text style={styles.__scheduleCalButtonLabel}>
                            Weekly
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.__scheduleCalButton}>
                        <Text style={styles.__scheduleCalButtonLabel}>
                            Monthly
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.__scheduleCalButton}>
                        <Text style={styles.__scheduleCalButtonLabel}>
                            Yearly
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.__innerBottomContentView}>
                    <Text style={styles.__innerBottomContentLabel}>
                        Week wise
                    </Text>
                    {weekDayList.length != 0 ? < FlatList
                        data={weekDayList}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        horizontal
                    /> :
                        <View style={styles.__contentLoading}>
                            <ActivityIndicator color={colors.white} size={'small'} />
                        </View>
                    }
                    <View style={styles.__innerBottomDownContent}>
                        <ButtonUI
                            onPress={() => { }}
                            title={"Lunch"}
                            backgroundColor={colors.white}
                            elevation={5}
                            borderRadius={10}
                            height={HeightWidth.getResWidth(35)}
                            width={Width / 2 - 25}
                            textStyles={{ color: colors.vividOrange, fontSize: 14 }}
                        />
                        <ButtonUI
                            onPress={() => { }}
                            title={"Dinner"}
                            backgroundColor={colors.white}
                            elevation={5}
                            borderRadius={10}
                            height={HeightWidth.getResWidth(35)}
                            width={Width / 2 - 25}
                            textStyles={{ color: colors.vividOrange, fontSize: 14 }}
                        />
                    </View>
                    <View style={styles.__selectCardTimeView}>
                        <Text style={styles.__selectCardTimeLabel}>
                            Time
                        </Text>
                        <View style={styles.__selectCardTimeRightView}>
                            <Text style={styles.__selectCardTime}>
                                {moment().format("hh")}
                            </Text>
                            <Text style={styles.__timeDivider}>  |  </Text>
                            <Text style={styles.__selectCardTime}>
                                {moment().format("mm")}
                            </Text>
                            <Text style={styles.__timeDivider}>  |  </Text>
                            <Text style={styles.__selectCardTime}>
                                {moment().format("A")}
                            </Text>
                        </View>
                    </View>
                </View>
            </CustomScrollView>
            <View style={styles.__button}>
                <ButtonUI
                    onPress={() => { }}
                    title={"Proceed to payment"}
                    backgroundColor={colors.vividOrange}
                    elevation={5}
                    borderRadius={10}
                    height={HeightWidth.getResWidth(55)}
                    textStyles={{ color: colors.white }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    __container: {
        flex: 1,
        backgroundColor: colors.offWhite
    },
    __contentLoading: {
        marginVertical: HeightWidth.getResWidth(10),
    },
    __contentHeaderLabel: {
        marginHorizontal: HeightWidth.getResWidth(10),
        marginVertical: HeightWidth.getResWidth(15),
        fontFamily: "Lato-Bold",
        fontSize: 23,
        color: colors.black
    },
    __innerTopContentView: {
        marginHorizontal: HeightWidth.getResWidth(10),
        borderRadius: 15,
        paddingVertical: HeightWidth.getResWidth(30),
        backgroundColor: colors.vividOrange,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    __scheduleCalButton: {
        height: Width / 3 - 20,
        width: Width / 3 - 20,
        borderRadius: 15,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center"
    },
    __scheduleCalButtonLabel: {
        fontFamily: "Lato-Regular",
        fontSize: 18,
        color: colors.vividOrange,
        textAlign: "center"
    },
    __innerBottomContentView: {
        marginHorizontal: HeightWidth.getResWidth(10),
        marginVertical: HeightWidth.getResWidth(15),
        borderRadius: 15,
        paddingVertical: HeightWidth.getResWidth(15),
        paddingHorizontal: HeightWidth.getResWidth(10),
        backgroundColor: colors.vividOrange,
    },
    __innerBottomContentLabel: {
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: colors.white,
        marginHorizontal: HeightWidth.getResWidth(1.5),
    },
    //?daycard
    __dayContainer: {
        borderRadius: 10,
        width: Width / 7 - 10,
        marginHorizontal: HeightWidth.getResWidth(1.5),
        backgroundColor: colors.white,
        elevation: 5,
        paddingVertical: HeightWidth.getResWidth(5),
        alignItems: "center",
        marginVertical: HeightWidth.getResWidth(10),
    },
    __dayTitle: {
        marginVertical: HeightWidth.getResWidth(5),
        paddingHorizontal: HeightWidth.getResWidth(3),
        fontFamily: "Lato-Regular",
        fontSize: 14,
        color: colors.vividOrange,
        textAlign: "center"
    },
    __daySubTitle: {
        marginBottom: HeightWidth.getResWidth(5),
        paddingHorizontal: HeightWidth.getResWidth(3),
        fontFamily: "Lato-Regular",
        fontSize: 14,
        color: colors.vividOrange,
        textAlign: "center"
    },
    __innerBottomDownContent: {
        marginVertical: HeightWidth.getResWidth(10),
        paddingVertical: HeightWidth.getResWidth(10),
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    __selectCardTimeView: {
        marginVertical: HeightWidth.getResWidth(10),
        borderRadius: 15,
        paddingVertical: HeightWidth.getResWidth(20),
        paddingHorizontal: HeightWidth.getResWidth(30),
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    __selectCardTimeLabel: {
        fontFamily: "Lato-Regular",
        fontSize: 18,
        color: colors.vividOrange,
    },
    __selectCardTimeRightView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around'
    },
    __selectCardTime: {
        fontFamily: "Lato-Regular",
        fontSize: 18,
        color: colors.black,
    },
    __timeDivider: {
        fontFamily: "Lato-Regular",
        fontSize: 18,
        color: colors.vividOrange,
    },
    __button: {
        marginVertical: HeightWidth.getResWidth(10),
        alignItems: "center"
    }
})
export default Schedule;