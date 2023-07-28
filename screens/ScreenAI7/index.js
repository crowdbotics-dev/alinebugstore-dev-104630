import React from "react";
import { SafeAreaView, StyleSheet, FlatList, Image, Text, View } from "react-native";
const bugs = [{
  id: 1,
  name: "Ladybug",
  image: "https://tinyurl.com/42evm3m3",
  description: "The ladybug is a small, colorful beetle that is commonly found in gardens. It is known for its bright red or orange color and black spots."
}, {
  id: 2,
  name: "Butterfly",
  image: "https://tinyurl.com/42evm3m3",
  description: "The butterfly is a flying insect with large, colorful wings. It undergoes a transformation from a caterpillar to a butterfly through a process called metamorphosis."
}, {
  id: 3,
  name: "Dragonfly",
  image: "https://tinyurl.com/42evm3m3",
  description: "The dragonfly is a flying insect with a long, slender body and large, transparent wings. It is known for its ability to hover and fly in all directions."
}, {
  id: 4,
  name: "Grasshopper",
  image: "https://tinyurl.com/42evm3m3",
  description: "The grasshopper is a jumping insect that is commonly found in grassy areas. It has long hind legs that allow it to leap great distances."
}, {
  id: 5,
  name: "Beetle",
  image: "https://tinyurl.com/42evm3m3",
  description: "The beetle is a diverse group of insects that can be found in various habitats. They have a hard exoskeleton and often have wings."
}];

const BugScreen = () => {
  const renderBugItem = ({
    item
  }) => <View style={styles.bugItem}>
      <Image source={{
      uri: item.image
    }} style={styles.bugImage} />
      <View>
        <Text style={styles.bugName}>{item.name}</Text>
        <Text style={styles.bugDescription}>{item.description}</Text>
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={bugs} renderItem={renderBugItem} keyExtractor={item => item.id.toString()} contentContainerStyle={styles.listContent} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  listContent: {
    paddingVertical: 16,
    paddingHorizontal: 24
  },
  bugItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  bugImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16
  },
  bugName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  bugDescription: {
    fontSize: 14,
    color: "gray"
  }
});
export default BugScreen;