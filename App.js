import React from 'react';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './src/screens/auth/LoginScreen';

export default function App() {
  return (
    <>
      <LoginScreen />
      <StatusBar style="auto" />
    </>
  );
}