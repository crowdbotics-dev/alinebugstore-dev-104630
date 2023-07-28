import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.date}>Today's Date</Text>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.description}>Short Description</Text>
      </View>
      <View style={styles.section}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <TouchableOpacity style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Health Events Logging</Text>
        <TextInput style={styles.input} placeholder="Symptom Input" />
        <View style={styles.severityScale}>
          {
          /* Severity scale components */
        }
        </View>
        <TextInput style={styles.input} placeholder="Duration Recording" />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Food Entry</Text>
        {
        /* Food entry components */
      }
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  section: {
    marginBottom: 20
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  severityScale: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }
};
export default Screen;