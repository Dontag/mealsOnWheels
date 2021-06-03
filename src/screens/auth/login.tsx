import React, {useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const Login = ({navigation, route}) => {

    const fetchHotelInfo = async () => {
        fetch("http://192.168.1.3:4000/hotelInfo")
            .then((response) => response.json())
            .then((data) => {
                setHotelList(data.hotelInfoList);
            })
            .catch((err) => console.log(err));
        console.log("Hotel List from apiCall= ", hotelList);
    };

    useEffect(() => { 
        

        let unsubscribe = navigation.addListener('focus', () => {
            console.log("Calling Data from Backend")
            fetchHotelInfo()
        });
        return unsubscribe
    },  []  )

    return (
        <View>

            <Text>This is Login</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={()=> navigation.navigate("Dashboard")}>
            <Text>This is Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
      },
});

export default Login;
