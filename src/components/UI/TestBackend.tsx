import React from 'react';;
import { useState, useEffect } from "react";
import { Text, View, Button } from 'react-native';
import ShowList from './ShowList';

const TestBackend = () => {
    const [hotelList, setHotelList] = useState([]);
    const list = [
        {
            "_id": "609ce7cdf6608b38cc921c23",
            "hotelName": "Vaishali",
            "__v": 0
        },
        {
            "_id": "609ce7dff6608b38cc921c24",
            "hotelName": "Shiv Sagar",
            "__v": 0
        },
        {
            "_id": "609ce7eef6608b38cc921c25",
            "hotelName": "Garden WadaPav",
            "__v": 0
        },
        {
            "_id": "609ce7fdf6608b38cc921c26",
            "hotelName": "RamKrishna Pure Veg",
            "__v": 0
        },
        {
            "_id": "609ce80df6608b38cc921c27",
            "hotelName": "Kalyan Bhel",
            "__v": 0
        },
        {
            "_id": "609cf50bd713fd6e18ec04aa",
            "hotelName": "Ganesh Bhel",
            "__v": 0
        },
        {
            "_id": "609cf5a3d713fd6e18ec04ab",
            "hotelName": "Hotel Prithiv",
            "__v": 0
        }
    ]

    const fetchHotelInfo = async () => {
        fetch("http://192.168.1.3:5000/hotelInfo")
            .then((response) => response.json())
            .then((data) => {
                setHotelList(data.hotelInfoList);
            })
            .catch((err) => console.log(err));
        console.log("Hotel List from apiCall= ", hotelList);
    };

    useEffect(() => {
        fetchHotelInfo();
    }, []);

    return (
        <View>
            <Button
                onPress={fetchHotelInfo}
                title="Refresh"
                color="#841584"
            />
            <ShowList hotelList={hotelList} />

            <Text>These hotels are fetched from server</Text>


        </View>
    );
}

export default TestBackend;
