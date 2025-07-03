import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Quote } from '../types/Quote';

const PanDeMuerteCardComponent = ({ quote }: { quote: Quote }) => {

  return (
    <View style={styles.card}>
      <Text style={styles.quoteText}>{quote.cita}</Text>
      <Text style={styles.authorText}>- {quote.autor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  quoteText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
    marginBottom: 10,
  },
  authorText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
  },
});

export default PanDeMuerteCardComponent;
