import React from 'react';
import { View } from 'react-native';
import PanDeMuerteCardComponentStyles from '../styles/PanDeMuerteCardComponentStyles';
import PanDeMuerteCardComponent from './PanDeMuerteCardComponent';

const PanDeMuerteComponent = () => {
  return (
    <View style={PanDeMuerteCardComponentStyles.container}>
      <PanDeMuerteCardComponent />
    </View>
  );
};

export default PanDeMuerteComponent;
