import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Signature from '../../components/SignatureComponent'; // Importa la firma creativa

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [opacity] = useState(new Animated.Value(1)); // Controla la opacidad para el parpadeo

  useEffect(() => {
    // Animación de parpadeo
    const blinkAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    blinkAnimation.start();

    // Finaliza el splash después de 4 segundos
    const timeout = setTimeout(() => {
      blinkAnimation.stop();
      onFinish(); // Llama a la función para terminar el splash
    }, 4000);

    return () => {
      clearTimeout(timeout); // Limpia el timeout al desmontar
      blinkAnimation.stop(); // Detiene la animación al desmontar
    };
  }, [opacity, onFinish]);

  return (
    <View style={styles.splashContainer}>
      <Animated.Text style={[styles.splashText, { opacity }]}><Text>Pan De Muerte</Text></Animated.Text>
      <Signature />

    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  splashText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default SplashScreen;