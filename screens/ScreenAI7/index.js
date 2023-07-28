import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Image, Text, View } from 'react-native';
const bugs = [{
  id: 1,
  name: 'Ladybug',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 2,
  name: 'Butterfly',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 3,
  name: 'Dragonfly',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 4,
  name: 'Grasshopper',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 5,
  name: 'Beetle',
  image: 'https://tinyurl.com/42evm3m3'
}];

const BugScreen = () => {
  const renderBugItem = ({
    item
  }) => <View style={styles.bugItem}>
      <Image source={{
      uri: item.image
    }} style={styles.bugImage} />
      <Text style={styles.bugName}>{item.name}</Text>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={bugs} renderItem={renderBugItem} keyExtractor={item => item.id.toString()} contentContainerStyle={styles.listContent} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listContent: {
    paddingVertical: 16,
    paddingHorizontal: 24
  },
  bugItem: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: 'bold'
  }
});
export default BugScreen;