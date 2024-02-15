import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native"
import React, { useEffect } from "react"
import { defaultStyles } from "@/constants/Styles"
import { IListing } from "@/types"
import { Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated"

interface Props {
  listings: IListing[]
  //   refresh: number
  category: string
}

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = React.useState(false)
  const listRef = React.useRef<FlatList>(null)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [category])

  return (
    <View
      style={[
        defaultStyles.container,
        {
          paddingTop: 16,
        },
      ]}
    >
      <FlatList
        ref={listRef}
        data={loading ? [] : listings}
        renderItem={RenderRow}
      />
    </View>
  )
}

const RenderRow: ListRenderItem<IListing> = ({ item }) => {
  const { name, medium_url, review_scores_rating, id, room_type, price } = item

  return (
    <Link href={`/listing/${id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.listing}
          entering={FadeInRight.springify()}
          exiting={FadeOutLeft}
        >
          <Image source={{ uri: medium_url! }} style={styles.image} />
          <TouchableOpacity
            style={{ position: "absolute", right: 32, top: 32 }}
          >
            <Ionicons name="heart-outline" size={24} color="#000" />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontFamily: "geist-sb" }}>{name}</Text>
            {review_scores_rating && (
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Ionicons name="star" size={16} />
                <Text style={{ fontFamily: "geist-sb" }}>
                  {review_scores_rating / 20}
                </Text>
              </View>
            )}
          </View>

          <Text style={{ fontFamily: "geist" }}>{room_type}</Text>

          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text style={{ fontFamily: "geist-sb" }}>$ {price}</Text>
            <Text style={{ fontFamily: "geist" }}>night</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  info: {
    textAlign: "center",
    fontFamily: "mon-sb",
    fontSize: 16,
    marginTop: 4,
  },
})

export default Listings
