import React from 'react';
import { View, Text } from 'react-native';
import PanDeMuerteCardComponentStyles from '../styles/PanDeMuerteCardComponentStyles';

interface Quote {
  cita: string;
  autor: string;
  lugar?: string; 
}

const PanDeMuerteCardComponent = ({ quote }: { quote: Quote }) => {

  return (
    <View style={PanDeMuerteCardComponentStyles.container}>
      <Text style={PanDeMuerteCardComponentStyles.text}>{`"${quote.cita}"`}</Text>
      <Text style={PanDeMuerteCardComponentStyles.text}>{`${quote.autor}`}</Text>
    </View>
  );
};

export default PanDeMuerteCardComponent;
