import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
    <View>
      <PanDeMuerteCardComponent quote={quote} />
    </View>
  );
};

export default PanDeMuerteComponent;