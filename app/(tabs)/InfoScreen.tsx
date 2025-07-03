import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoScreenComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pan de Muerte</Text>
      <Text style={styles.description}>
        Pan de muerte es un objeto literario que reúne citas de distintas autoras y autores 
        provenientes de la literatura, filosofía, poesía y ocultismo. 
        Todas ellas exploran la muerte y los aspectos más oscuros de la existencia humana: 
        soledad, miedo, pérdida, tristeza y melancolía.
      </Text>
      <View style={styles.space} />
      <Text style={styles.description}>
        Inspirado como respuesta al tradicional Pan de vida 
        —que ofrecía pasajes bíblicos en muchos hogares—, 
        este proyecto invita a abrazar la oscuridad y reconocer 
        la presencia inevitable de la muerte como una forma de afirmar 
        la vida y el caos que la sostiene.
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    fontFamily: 'sans-serif',
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'justify',
    fontFamily: 'sans-serif-light',
  },
    space: {
    height: 20, // Espacio en blanco entre párrafos
  },
});

export default InfoScreenComponent;