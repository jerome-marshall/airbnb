import { Ionicons } from "@expo/vector-icons"
import { useFonts } from "expo-font"
import { Stack, useRouter } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { TouchableOpacity } from "react-native"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    geist: require("../assets/fonts/Geist-Regular.otf"),
    "geist-b": require("../assets/fonts/Geist-Bold.otf"),
    "geist-sb": require("../assets/fonts/Geist-SemiBold.otf"),
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const router = useRouter()
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/login"
        options={{
          presentation: "modal",
          title: "Log in or sign up",
          headerTitleStyle: { fontFamily: "geist-sb" },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modals)/booking"
        options={{
          presentation: "transparentModal",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="listing/[id]" options={{ headerTitle: "" }} />
    </Stack>
  )
}
