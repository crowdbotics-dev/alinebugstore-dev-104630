import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to My App</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.description}>
          This is a modern screen design for your app. It includes a header with a title and a content section with an image and description.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666'
  }
});
export default Screen;