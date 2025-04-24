import { Appearance } from 'react-native';
import React from 'react';
import { WelcomeLayout } from '@/components/ui/WelcomeLayout';
import { darkTheme, lightTheme } from '../../theme';

export default function HomeScreen() {
  const colorScheme = Appearance.getColorScheme() ?? 'light';
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <>
      <WelcomeLayout
        title="Bem-vindo ao AMusic"
        subtitle="Sua trilha sonora favorita começa aqui 🎶"
        buttonText="Explorar agora"
        onPress={() => console.log('Explorar')}
        logoImage={require('@/assets/images/AMusic-logo.png')}
        theme={theme}
        colorScheme={colorScheme}
      />
    </>
  );
}
