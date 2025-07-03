import React from 'react';
import { View, StyleSheet } from 'react-native';
import PanDeMuerteComponent from '../../components/PanDeMuerteComponent';

export default function HomeScreen() {
  return (
    <View style={styles.outerContainer}>
      <PanDeMuerteComponent />
    </View>
  );
}

  const styles = StyleSheet.create({
    outerContainer: {
      flex: 1,
      backgroundColor: '#121212', // Fondo oscuro
    },
  });
