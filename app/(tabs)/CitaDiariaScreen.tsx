import React from 'react';
import { View } from 'react-native';
import PanDeMuerteComponent from '../../components/PanDeMuerteComponent';
import HomeScreenStyles from '../../styles/HomeScreenStyles';

export default function HomeScreen() {
  return (
    <View style={HomeScreenStyles.container}>
      <PanDeMuerteComponent />
    </View>
  );
}
