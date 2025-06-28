import React from 'react';
import { View } from 'react-native';
import PanDeVidaStyles from './styles/PanDeMuerteCardComponentStyles';
import PanDeMuerteCardComponent from './PanDeMuerteCardComponent';

const PanDeMuerteComponent = () => {
  return (
    <View style={PanDeVidaStyles.container}>
      <PanDeMuerteCardComponent />
    </View>
  );
};

export default PanDeMuerteComponent;
