import { Appearance } from 'react-native';
import React from 'react';
import { WelcomeLayout } from '@/components/layouts/WelcomeLayout';
import { useTheme } from '@/context/ThemeContext';

export default function HomeScreen() {
  const colorScheme = Appearance.getColorScheme() ?? 'light';
  const { theme } = useTheme();

  return (
    <>
      <WelcomeLayout
        title="Bem-vindo ao AMusic"
        subtitle="Sua trilha sonora favorita começa aqui 🎶"
        buttonText="Explorar agora"
        onPress={() => console.log('Explorar')}
        logoImage={require('@/assets/images/AMusic-logo.png')}
        colorScheme={colorScheme}
      />
    </>
  );
}
