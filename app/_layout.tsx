import { Stack } from "expo-router";

export default function RootLayout() {
  return   <Stack>
    // remove header from index page
  <Stack.Screen name="index" options={{ headerShown: false }} />
</Stack>;
}
