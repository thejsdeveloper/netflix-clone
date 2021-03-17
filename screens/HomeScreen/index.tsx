import * as React from "react";
import { FlatList, Image } from "react-native";
import { View, Text } from "../../components/Themed";
import { styles } from "./styles";
import catagories from "../../assets/data/categories";
import { HomeCategory } from "../../components/HomeCatagory";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={catagories.items}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
}
