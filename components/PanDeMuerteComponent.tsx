import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import quotes from '../data/citas.json';
import PanDeMuerteCardComponent from './PanDeMuerteCardComponent';
import { Quote } from '../types/Quote';

const getDailyQuote = (): Quote => {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
};

const PanDeMuerteComponent = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchQuote = () => {
      const dailyQuote = getDailyQuote();
      setQuote(dailyQuote);
    };

    fetchQuote();
  }, []);

  if (!quote) return <Text>Cargando...</Text>;

  return (
    <View style={styles.outerContainer}>
      <View style={styles.cardContainer}>
        <PanDeMuerteCardComponent quote={quote} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setQuote(getDailyQuote())}>
        <Text style={styles.buttonText}>Siguiente cita</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'space-between', // Distribuye el contenido
    backgroundColor: '#121212',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%', // Ocupa todo el ancho disponible
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#121212',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PanDeMuerteComponent;