import React from 'react'
import { View, SafeAreaView, Text, Button, FlatList } from "react-native";

const Item = ({ hotelName }) => (
    <View>
        <Text>{hotelName}</Text>
    </View>
);

const ShowList = ({ hotelList }) => {
    const renderItem = ({ item }) => (
        <Item hotelName={item.hotelName} />
    );

    return (
        <SafeAreaView style={{borderWidth:4, height:200}}>
            <FlatList
                data={hotelList}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
        // <View>
        //     {
        //         hotelList.map((hotel) => {
        //             return <Text>{hotel.hotelName}</Text>
        //         })
        //     }
        // </View>
    );
};

export default ShowList;
