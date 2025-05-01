import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { AuthProvider, ThemeProvider, useTheme } from '@/context';
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks';

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LayoutInner />
      </ThemeProvider>
    </AuthProvider>
  );
}

function LayoutInner() {
  const { theme } = useTheme();
  const colorScheme = useColorScheme();

  return (
    <NavigationThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={{ flex: 1 }}>
          <Stack />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationThemeProvider>
  );
}
