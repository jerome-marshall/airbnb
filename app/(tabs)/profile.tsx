import { View, Text, Button } from "react-native"
import React from "react"
import { useAuth } from "@clerk/clerk-expo"
import { Link } from "expo-router"

const Page = () => {
  const { signOut, isSignedIn } = useAuth()

  return (
    <View>
      {isSignedIn ? (
        <Button title="Sign Out" onPress={() => signOut()} />
      ) : (
        <Link href={"/(modals)/login"}>
          <Text>Sign In</Text>
        </Link>
      )}
    </View>
  )
}

export default Page
