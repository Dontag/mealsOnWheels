import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import InrDcrButton from '../../components/UI/InrDcrButton';

//? Components
import TextInputUI from '../../components/UI/TextInput';
import Profile from '../../components/UI/Profile';

//? Utilities
import { colors, getFetch } from '../../utilities/utilities';
import HeightWidth from '../../utilities/HeightWidth';
import TestBackend from '../../components/UI/TestBackend';
import ProfileInfo from '../../components/UI/ProfileInfo';
import DishCardUI from '../../components/UI/DishCardUI';

const Dashboard = () => {

    const [name, setName] = useState('');
    const [dishList, setDishList] = useState([]);

    const onChange = (text) => {
        setName(text)
    }

    const handleClick = () => {
        console.log('Pressed');
    }
    const profileInfo = {
        "name": "Yash Kelewala",
        "mail": "yashgandhi@gmail.com",
        "phone": "+91 9822185749",
        "address": "C-306, Ceratec City, S.No.33/6/B, Yewalewadi, Near Aakruti City,Katraj Kondhwa Road, Near ISKON Temple, Kamthe Nagar, Kondhwa Budruk, Yewalewadi, Maharashtra 411048"
    }

    const fetchDishInfo = async () => {
        // fetch("http://192.168.1.3:5000/products")
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setDishList(data.dishList);
        //     })
        //     .catch((err) => console.log(err));
        try {
            let getData = await getFetch("http://192.168.1.3:5000/products", "withoutAuth")
            setDishList(getData.dishList)

        } catch (err) {

        }
        console.log("Hotel dish List from apiCall= ", dishList);
    };

    useEffect(() => {
        fetchDishInfo()
    }, [])

    return (
        <View style={styles.__container}>
            <View style={styles.__textInput}>
                <TextInputUI
                    leftIconColor={colors.black}
                    leftIconName={"search"}
                    leftIconSize={26}
                    width={"lg"}
                    height={60}
                    value={name}
                    onChangeText={onChange}
                    backgroundColor={colors.lightGrayishCyan}
                    placeholder={"Search"}
                    placeholderTextColor={`${colors.black}98`}
                    textInputStyles={{ color: colors.veryDarkDesaturatedBlue, fontFamily: 'Lato-Italic' }}
                    inputBorderR={10}
                    elevation={20}
                />
                {/* <ProfileInfo/> */}
                <DishCardUI
                    dishList={dishList}
                />

                {/* <InrDcrButton
                    minVal={0}
                    minreq={1}
                    max={10}
                    val={3}
                    disableControl={false}
                    disabledColor={'#eeeeee'}
                    activeColor={'#FF8C00'}
                    handleClick={handleClick}
                /> */}
                {/* <Profile profileInfo={profileInfo} /> */}
                {/* {/* <TestBackend /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    __container: {
        flex: 1,
        backgroundColor: colors.white
    },
    __textInput: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: HeightWidth.getResWidth(20),
    },
    __text: {
        color: colors.veryDarkDesaturatedBlue
    }
})
export default Dashboard;