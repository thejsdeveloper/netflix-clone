import React from "react";
import { FlatList, Image } from "react-native";
import { Text } from "../../components/Themed";
import { styles } from "./styles";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

export const HomeCategory = ({ category }: HomeCategoryProps) => {
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item.poster }} />
        )}
      />
    </>
  );
};
