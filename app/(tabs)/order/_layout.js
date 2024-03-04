import { Stack } from "expo-router";
import { COLORS } from "../../../styles/constants";
import { View, Button } from "react-native";
import { router } from "expo-router";
import { LoginButtonTop } from "../../../components/LoginButtonTop";

export default function OrderStack() {
  return (
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.dark,
          },
          headerTitleStyle: {
            color: COLORS.grey,
          },
          headerBackTitleVisible: false,
          headerTintColor: COLORS.grey,
          headerRight: () => {
            return (
              <LoginButtonTop />
            );
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Order" }} />
      </Stack>
  );
}
