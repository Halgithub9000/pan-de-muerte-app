import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import quotes from '../data/citas.json'; // Carga las citas desde el archivo JSON
import PanDeMuerteCardComponent from './PanDeMuerteCardComponent'; // Importa el componente CardComponent

const getDailyQuote = async () => {
  const today = new Date().toISOString().split('T')[0]; // Obtén la fecha actual (YYYY-MM-DD)
  const storedDate = await AsyncStorage.getItem('lastDate');
  const storedQuote = await AsyncStorage.getItem('dailyQuote');

  if (storedDate === today && storedQuote) {
    // Si la fecha no ha cambiado, devuelve la cita almacenada
    return JSON.parse(storedQuote);
  } else {
    // Si la fecha ha cambiado, selecciona una nueva cita
    const index = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[index];

    // Guarda la nueva cita y la fecha
    await AsyncStorage.setItem('lastDate', today);
    await AsyncStorage.setItem('dailyQuote', JSON.stringify(newQuote));

    return newQuote;
  }
};

const PanDeMuerteComponent = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const dailyQuote = await getDailyQuote();
      setQuote(dailyQuote);
    };

    fetchQuote();
  }, []);

  if (!quote) return <Text>Cargando...</Text>;

  return (
    <View>
      <PanDeMuerteCardComponent quote={quote} />
    </View>
  );
};

export default PanDeMuerteComponent;