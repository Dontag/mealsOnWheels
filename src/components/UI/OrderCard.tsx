import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

//Components
import InrDcrButton from './InrDcrButton';

// Utilities
import { black, white } from 'react-native-paper/lib/typescript/styles/colors'
import { colors } from '../../utilities/colors'


const DishData = 
{
        Name: 'Pav Bhaji',
        Description: 'Delicious Bread and Gravy.',
        Price: '1000',
        Image: 'https://ministryofcurry.com/wp-content/uploads/2020/01/pav-bhaji-1-2.jpg',
}
    

const OrderCard = () => {
    return (
        <View style={styles.__inputView}>
            <Text style={styles._priceTagView}>${DishData.Price}</Text>
            <Text style={styles._dishNameView}>{DishData.Name}</Text>
            <View style={styles._ImageContainer}>
                 <Image style={styles._imageView} source={{uri: DishData.Image}} />
            </View>
            <View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    __inputView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width:260,
        height: 100,
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 10,
        marginVertical:5,
        shadowOffset: { width: 0, height: 2 },
    },
    _priceTagView: {
        position: "absolute",
        paddingRight: 40,
        paddingTop:40,
        paddingBottom:10,
        color: 'orange',
        textAlign: 'right',
        fontSize: 15,
        fontFamily: "Lato-Regular"
        
    },
    _dishNameView: {
        position: "absolute",
        paddingRight:20,
        paddingBottom:20,
        color: 'black',
        textAlign: 'left',
        fontSize: 15,
        fontFamily: "Lato-Regular"
    },

    _ImageContainer: {
        position: "absolute",
        paddingRight:180,
        paddingLeft:40,
        paddingTop:60,
    },

    _imageView: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius:90,
    }
})

export default OrderCard;