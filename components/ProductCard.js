import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ProductCard({
  image,
  category,
  title,
  price,
  description,
}) {
  const [count, setCont] = React.useState(1);
  const { colorSchema } = useColorScheme();

  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        ></Image>
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <View className="flex-row justify-between my-3">
          <View className="flex-row items-center gap-3">
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorSchema === "light" ? "blue" : "red"}
              onPress={() => setCont(count - 1)}
            ></AntDesign>
            <Text className="text-xl dark:text-white">{count}</Text>
            <AntDesign
              name="playcircleo"
              size={24}
              color={colorSchema === "light" ? "black" : "red"}
              onPress={() => setCont(count + 1)}
            ></AntDesign>
          </View>
          <Text className="text-2xl font-extrabold dark:text-white">
            ${price * count}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          className="text-sm text-black/60 dark:text-white/70"
        >
          {description}
        </Text>
        <TouchableOpacity className="bg-black dark:bg-white p-3 rounded-full flex-row justify-center w-10/12 self-center mt-5">
          <Text className="text-white dark:text-black font-bold">
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
