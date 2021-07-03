import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  UIManager,
  Platform,
  TouchableOpacity,
  Dimensions,
} from "react-native";

// Components
import OrderCard  from "./OrderCard";
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const layoutAnimConfig = {
  duration: 300,
  update: {
    type: LayoutAnimation.Types.easeInEaseOut, 
  },
  delete: {
    duration: 100,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const dummyData = [
  {
    id: 1,
    name: "orange card",
    color: "orange",
  },
  {
    id: 2,
    name: "red card",
    color: "red",
  },
  {
    id: 3,
    name: "green card",
    color: "green",
  },
  {
    id: 4,
    name: "blue card",
    color: "blue",
  },
  {
    id: 5,
    name: "cyan card",
    color: "cyan",
  },

];

const CartScreen = () => {
  const [data, setData] = React.useState(dummyData); 
  const removeItem = (id) => {
    let arr = data.filter(function(item) {
      return item.id !== id
    })
    setData(arr);
    LayoutAnimation.configureNext(layoutAnimConfig)
  };

  return (
    <View style={styles.__container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.__flatList}
        horizontal={false}
        data={data}

        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (                         
            <View>
              <OrderCard />  
              <TouchableOpacity  
                onPress={() => removeItem(item.id)}
                >    
                <Icon style={styles.__DeleteButton} name="trash" color='orange' size={20} />
            </TouchableOpacity>               
            </View>  
          );
        }}
      />    
    </View>
  );
}

const styles = StyleSheet.create({
  __container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 8,
    alignItems: 'center'
  },
  __flatList: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  
  __DeleteButton: {
    alignSelf: 'flex-end'
  }
});

export default CartScreen;
