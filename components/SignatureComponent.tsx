import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Signature = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App by severopg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100, // Ubica la firma en la parte inferior
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#ffffff',
    opacity: 0.7, // Hace que el texto sea tenue
  },
});

export default Signature;