import React from 'react';
import { View, Text } from 'react-native';
import PanDeMuerteCardComponentStyles from './styles/PanDeMuerteCardComponentStyles';
import citas from './data/citas.json';

const PanDeMuerteCardComponent = () => {
  const randomIndex = Math.floor(Math.random() * citas.length);
  const cita = citas[randomIndex];

  return (
    <View style={PanDeMuerteCardComponentStyles.container}>
      <Text style={PanDeMuerteCardComponentStyles.text}>{`"${cita.cita}"`}</Text>
      <Text style={PanDeMuerteCardComponentStyles.text}>{`${cita.autor} - ${cita.lugar}`}</Text>
    </View>
  );
};

export default PanDeMuerteCardComponent;
