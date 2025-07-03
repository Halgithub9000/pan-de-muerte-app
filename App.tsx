import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Navigation from './app/index';
export default function App() {
  useEffect(() => {
    const prepare = async () => {
      try {
        // Mantén el splash visible
        await SplashScreen.preventAutoHideAsync();
        // Simula un retraso de 2 segundos
        await new Promise(resolve => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Oculta el splash
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
}