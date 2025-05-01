import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useTheme } from '@/context';

const ProtectedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const { theme } = useTheme();
  
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Stack screenOptions={{ headerShown: false }}>  
        <Stack.Screen name="(tabs)" />
      </Stack>
      {children}
    </View>
  );
};

export default ProtectedLayout;
