import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/colors";
 
const DishData = 
{
        Name: 'Pav Bhaji',
        Description: 'Delicious Bread and Gravy.',
        Price: '1000',
        Image: 'https://ministryofcurry.com/wp-content/uploads/2020/01/pav-bhaji-1-2.jpg',
}

const ProfileDetails = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  return (
    <View style={styles.container}>
      <View style={styles.DishDetail}>
        <Image style={styles._imageView} source={{uri: DishData.Image}} />
        <Text style={styles.DishDetailInfo}>{DishData.Name}</Text>    
        <Text style={styles.DishDetailPrice}>{DishData.Price}$</Text>   
      </View>

      <View style={styles.DeliveryInfoUI}>
        <Text style={styles.DeliveryInfoTitle}>Delivery Info</Text>
        <Text style={styles.DeliveryInfoDescription}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
      </View>
      <View style={styles.DeliveryInfoUI}>
        <Text style={styles.DeliveryInfoTitle}>Return Policy</Text>
        <Text style={styles.DeliveryInfoDescription}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
      </View>

      <Button
      title="Add to Cart"
      color="#f194ff"
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      />

    </View>

    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },

  DeliveryInfoUI: {
    paddingBottom: 10,
    width: 300,
    alignItems: "center",
  },
 
  image: {
    padding:20,
    margin:20
  },
 
  DishDetail: {
    paddingBottom: 10,
    width: 300,
    height: 300,
    alignItems: "center",
  },
 
  DeliveryInfoTitle: {
    marginTop:10,
    paddingRight:150,
    fontFamily: "Lato-Regular",
    fontSize: 18,
    color: "#000",
    alignItems: "center",
  },

  DeliveryInfoDescription: {
    marginTop:10,
    marginHorizontal:20,
    fontFamily: "Lato-Regular",
    fontSize: 16,
    color: "#5b5b5b",
    alignItems: "center",
    textAlign: "justify"
  },


  DishDetailInfo: {
    paddingTop:220,
    fontFamily: "Lato-Regular",
    fontSize: 18,
    color: "#000",
    alignItems: "center",
  },

  DishDetailPrice: {
    fontFamily: "Lato-Regular",
    paddingVertical: 10,
    fontSize: 20,
    color: "#fa4a0c"
  },

  _imageView: {
    position: "absolute",
    width: 170,
    height: 170,
    top:30,
    borderRadius:90,
}
});

export default ProfileDetails;