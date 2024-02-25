import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-orange-600 flex-1 items-center justify-center">
      <Text className="rounded-full text-xl bg-white text-black p-6">
        My name is Shorove
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
