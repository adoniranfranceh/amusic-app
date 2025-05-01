import React from 'react';
import { WelcomeLayout } from '@/components/layouts/WelcomeLayout';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/context';

export default function HomeScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
     
    </SafeAreaView>
  );
}
