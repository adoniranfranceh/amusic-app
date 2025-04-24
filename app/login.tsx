import { Appearance, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { WelcomeLayout } from '@/components/ui/WelcomeLayout';
import { darkTheme, lightTheme } from '../theme';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const colorScheme = Appearance.getColorScheme() || 'light';
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles = StyleSheet.create({
    input: {
      width: '100%',
      padding: theme.spacing.md,
      marginBottom: theme.spacing.md,
      borderRadius: theme.borderRadius.sm,
      backgroundColor: theme.colors.background,
      color: theme.colors.textPrimary,
    },
    googleButton: {
      marginTop: theme.spacing.sm,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.sm,
      backgroundColor: theme.colors.primary,
      width: '100%',
    },
    googleText: {
      color: theme.colors.white,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    registerText: {
      marginTop: theme.spacing.lg,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    registerLink: {
      color: theme.colors.primary,
      fontWeight: 'bold',
    },
  });

  return (
    <>
      <WelcomeLayout
        title="Entrar na sua conta"
        subtitle="Conecte-se à sua trilha sonora"
        logoImage={require('@/assets/images/AMusic-logo.png')}
        theme={theme}
        colorScheme={colorScheme}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={theme.colors.textSecondary}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={theme.colors.textSecondary}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Google Login')}>
          <Text style={styles.googleText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Não tem uma conta?{' '}
          <Text style={styles.registerLink} onPress={() => router.push('/register')}>
            Cadastre-se
          </Text>
        </Text>
      </WelcomeLayout>
    </>
  );
}
