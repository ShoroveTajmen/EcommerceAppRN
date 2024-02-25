import { useColorScheme } from "nativewind";
import { StatusBar, Switch, Text, View } from "react-native";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className="flex-row w-full gap-5">
        <Text className="dark:text-white text-2xl font-bold">
          New Collection
        </Text>
        <Switch
          value={colorScheme === "dark"}
          onChange={toggleColorScheme}
        ></Switch>
      </View>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </View>
  );
}
