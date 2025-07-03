import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import InfoScreenComponent from './(tabs)/InfoScreen';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './(tabs)/CitaDiariaScreen';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#ffffff',
          tabBarStyle: { backgroundColor: '#121212' },
          tabBarActiveTintColor: '#ffffff',
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Info"
          component={InfoScreenComponent}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cita Diaria"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}