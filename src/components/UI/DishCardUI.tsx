import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { black, white } from 'react-native-paper/lib/typescript/styles/colors'
import { colors } from '../../utilities/colors'

const DishData =
    {
        Name: 'Pav Bhaji',
        Description: 'Delicious Bread and Gravy.',
        Price: '1000',
        Image: 'https://ministryofcurry.com/wp-content/uploads/2020/01/pav-bhaji-1-2.jpg',
    }



const DishCardUI = ({ dishList }) => {
    return (
        dishList.map((dish) => {
            return (
                <View style={styles.__inputView}>
                    <Text style={styles._priceTagView}>${dish.Price}</Text>
                    <Text style={styles._dishNameView}>{dish.Name}</Text>
                    {/* <Image style={styles._imageView} source={{ uri: DishData.Image }} /> */}
                </View>
            )
        })
    )
}

const styles = StyleSheet.create({
    __inputView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        paddingLeft: 8,
        width: 165,
        height: 200,
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 2 },
    },
    _priceTagView: {
        position: "absolute",
        paddingLeft: 120,
        paddingRight: 20,
        paddingTop: 160,
        color: 'orange',
        textAlign: 'right',
        fontSize: 15,
        fontFamily: "Lato-Regular"

    },
    _dishNameView: {
        position: "absolute",
        paddingRight: 80,
        paddingTop: 160,
        color: 'black',
        textAlign: 'left',
        fontSize: 15,
        fontFamily: "Lato-Regular"
    },

    _imageView: {
        position: "absolute",
        width: 120,
        height: 120,
        top: 30,
        borderRadius: 90,
    }
})

export default DishCardUI;