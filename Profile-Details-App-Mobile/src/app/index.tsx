 import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.profileCard}>

        <Text style={styles.title}>My Profile</Text>

        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.profileImage}
          resizeMode="contain"
        />

        <View style={styles.profileDetails}>

          <View style={styles.profileItem}>
            <Text style={styles.heading}>Name</Text>
            <Text style={styles.value}>Dunal Anjula</Text>
          </View>

          <View style={styles.profileItem}>
            <Text style={styles.heading}>Email</Text>
            <Text style={styles.value}>anjuladj65@gmail.com</Text>
          </View>

          <View style={styles.profileItem}>
            <Text style={styles.heading}>Points</Text>
            <Text style={styles.value}>0</Text>
          </View>

        </View>

        <Pressable style={styles.addButton}>
          <Text style={styles.plus}>+</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileCard: {
    width: 350,
    minHeight: 550,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 25,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,

    elevation: 5,
    alignItems: 'center',
    position: 'relative',
  },

  title: {
    marginBottom: 25,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222222',
  },

  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 35,
  },

  profileDetails: {
    width: '100%',
  },

  profileItem: {
    marginBottom: 30,
    alignItems: 'center',
  },

  heading: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },

  value: {
    fontSize: 16,
    color: '#666666',
  },

  addButton: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  plus: {
    color: '#ffffff',
    fontSize: 28,
    lineHeight: 32,
  },
});