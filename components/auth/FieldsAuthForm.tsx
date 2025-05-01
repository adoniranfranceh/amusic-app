import React, { useState } from 'react';
import { TextInput, StyleSheet, Appearance, View, Dimensions } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Button from '../ui/Button';
import { loginUser } from '@/services/session'
import { router } from 'expo-router';
import { Alert } from 'react-native';

interface FieldsAuthFormProps {
  isRegister: boolean;
  onFieldsChange: (fields: { email: string; password: string; name?: string }) => void;
}

export const FieldsAuthForm: React.FC<FieldsAuthFormProps> = ({ isRegister, onFieldsChange }) => {
  const { theme } = useTheme();
  const windowWidth = Dimensions.get('window').width;
  const [loading, setLoading] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = () => {
    onFieldsChange({ email, password, name: isRegister ? name : undefined });
  };

  const handleSubmit = () => {
    if (isRegister) {
      handleLogin();
    } else {
      handleLogin();
    }
  };

  async function handleLogin() {
    try {
      setLoading(true);
      await loginUser({ email: email, password: password });
      router.replace('/(protected)/(tabs)');
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setLoading(false);
        Alert.alert('Erro', err.message);
        console.log('Erro ao logar:', err.message);
      }
    }
  }

  React.useEffect(() => {
    handleChange();
  }, [email, password, name]);

  const styles = StyleSheet.create({
    formContainer: {
      width: Math.min(windowWidth * 0.85, 400),
      alignSelf: 'center',
    },
    input: {
      width: '100%',
      padding: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      marginBottom: theme.spacing.lg,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.background,
      color: theme.colors.textPrimary,
      fontSize: 16,
      borderWidth: 1,
      borderColor: 'rgba(150, 150, 150, 0.3)',
    },
    buttonContainer: {
      marginTop: theme.spacing.md,
      width: '100%',
    }
  });

  return (
    <View style={styles.formContainer}>
      {isRegister && (
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor={theme.colors.textSecondary}
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={theme.colors.textSecondary}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={theme.colors.textSecondary}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        autoComplete="password"
      />

      <View style={styles.buttonContainer}>
        <Button
          icon=""
          text={loading ? 'Carregando...' : (isRegister ? 'Cadastrar' : 'Entrar') }
          onPress={handleSubmit}
          backgroundColor={theme.colors.primary}
          textColor={theme.colors.white}
        />
      </View>
    </View>
  );
};
