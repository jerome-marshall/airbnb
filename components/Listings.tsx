import { View, Text } from "react-native"
import React, { useEffect } from "react"

interface Props {
  listings: any[]
  //   refresh: number
  category: string
}

const Listings = ({ listings, category }: Props) => {
  useEffect(() => {}, [category])

  return (
    <View>
      <Text>Listings</Text>
    </View>
  )
}

export default Listings
