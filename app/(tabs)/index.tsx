import { View, Text } from "react-native"
import React, { useMemo } from "react"
import { Link, Stack } from "expo-router"
import ExploreHeader from "@/components/ExploreHeader"
import Listings from "@/components/Listings"
import listingData from "@/assets/data/airbnb-listings.json"
import { IListing } from "@/types"

const Page = () => {
  const [category, setCategory] = React.useState("Tiny homes")

  const items = useMemo(() => listingData as IListing[], [])

  const onDateChanged = (category: string) => {
    setCategory(category)
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDateChanged} />,
        }}
      />
      <Listings listings={items} category={category} />
    </View>
  )
}

export default Page
