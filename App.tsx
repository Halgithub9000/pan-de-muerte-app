import React, { useState } from 'react';
import { View } from 'react-native';
import Navigation from './app/index';
import SplashScreen from './app/(tabs)/SplashScreen'; // Importa el componente SplashScreen

export default function App() {
  const [showSplash, setShowSplash] = useState(true); // Estado para controlar el splash

  return (
    <View style={{ flex: 1 }}>
      {showSplash ? (
        // Muestra el SplashScreen al inicio
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        // Muestra el enrutador principal después del splash
        <Navigation />
      )}
    </View>
  );
}