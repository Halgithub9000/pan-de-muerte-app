import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Quote } from '../types/Quote';
import { RFValue } from 'react-native-responsive-fontsize'; // Importa la función para tamaños dinámicos

const PanDeMuerteCardComponent = ({ quote }: { quote: Quote }) => {
  return (
    <View style={styles.card}>
      <Text 
      numberOfLines={4}
      adjustsFontSizeToFit
      style={styles.quoteText}>{quote.cita}</Text>
      <Text style={styles.authorText}>- {quote.autor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%', // Responsivo: ocupa el 90% del ancho de la pantalla
    height: '20%', // Altura porcentual: ocupa el 30% de la pantalla
    padding: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center', // Centra el contenido verticalmente
    marginHorizontal: '5%', // Centra la card horizontalmente
  },
  quoteText: {
    fontSize: RFValue(18, Dimensions.get('window').height), // Ajusta dinámicamente el tamaño de la fuente
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
    marginBottom: 10,
  },
  authorText: {
    fontSize: RFValue(16, Dimensions.get('window').height), // Ajusta dinámicamente el tamaño de la fuente
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
  },
});

export default PanDeMuerteCardComponent;