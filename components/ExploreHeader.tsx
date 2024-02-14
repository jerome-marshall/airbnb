import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import React, { useRef } from "react"
import Colors from "@/constants/Colors"
import { defaultStyles } from "@/constants/Styles"
import { Link } from "expo-router"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import * as Haptics from "expo-haptics"

const categories = [
  {
    name: "Tiny homes",
    icon: "home",
  },
  {
    name: "Cabins",
    icon: "house-siding",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "Play",
    icon: "videogame-asset",
  },
  {
    name: "City",
    icon: "apartment",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Countryside",
    icon: "nature-people",
  },
  {
    name: "Pets allowed",
    icon: "pets",
  },
  {
    name: "Experiences",
    icon: "explore",
  },
]

interface Props {
  onCategoryChanged: (category: string) => void
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const scrollRef = useRef<ScrollView>(null)

  const itemsRef = useRef<Array<TouchableOpacity | null>>([])
  const [activeIndex, setActiveIndex] = React.useState(0)

  const selectCategory = (index: number) => {
    setActiveIndex(index)

    const selected = itemsRef.current[index]

    selected?.measure((x, y) => {
      scrollRef.current?.scrollTo({
        x: x - 16,
        y: 0,
        animated: true,
      })
    })

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    onCategoryChanged(categories[index].name)
  }

  return (
    <SafeAreaView
      style={[
        defaultStyles.AndroidSafeArea,
        {
          // flex: 1,
          backgroundColor: "#fff",
        },
      ]}
    >
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={"/(modals)/booking"} asChild>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons name="search" size={24} />
              <View>
                <Text style={{ fontFamily: "geist-sb" }}>Where to?</Text>
                <Text style={{ fontFamily: "geist", color: Colors.grey }}>
                  Anywhere - Any week
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={24} />
          </TouchableOpacity>
        </View>

        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingHorizontal: 16,
            gap: 32,
          }}
        >
          {categories.map((category, index) => {
            const isActive = activeIndex === index

            return (
              <TouchableOpacity
                onPress={() => selectCategory(index)}
                key={index}
                ref={(ref) => (itemsRef.current[index] = ref)}
                style={
                  isActive ? styles.categoriesBtnActive : styles.categoriesBtn
                }
              >
                <MaterialIcons
                  name={category.icon as any}
                  size={24}
                  style={{
                    color: isActive ? "#000" : Colors.grey,
                  }}
                />
                <Text
                  style={
                    isActive ? styles.categoryTextActive : styles.categoryText
                  }
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 130,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 16,
  },

  searchBtn: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 1,
    gap: 10,
    padding: 14,
    alignItems: "center",
    width: 280,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#c2c2c2",
    borderRadius: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#A2A0A2",
    borderRadius: 24,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: "geist-sb",
    color: Colors.grey,
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: "geist-sb",
    color: "#000",
  },
  categoriesBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 3,
    paddingBottom: 8,
  },
})

export default ExploreHeader
