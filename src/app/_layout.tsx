import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { AuthProvider, ThemeProvider, useTheme } from '@/context';
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks';
import { useFonts } from 'expo-font';

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

  const [fontsLoaded] = useFonts({
    Rubik: require('@/assets/fonts/Rubik-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return <View><Text>Loading fonts...</Text></View>;
  }

  return (
    <NavigationThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }} />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Rubik-VariableFont_wght',
  },
});
