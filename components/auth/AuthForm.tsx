import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/ui/Button';
import { FieldsAuthForm } from './FieldsAuthForm';
import { useTheme } from '@/context/ThemeContext';

interface AuthFormProps {
  title: string;
  subtitle: string;
  actionText: string;
  actionHandler: () => void;
  googleHandler: () => void;
  isRegister: boolean;
  onChangeForm: () => void;
  showFields: boolean;
}

export const AuthForm = ({
  actionHandler,
  googleHandler,
  isRegister,
  onChangeForm,
  showFields
}: AuthFormProps) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    registerText: {
      marginTop: theme.spacing.lg,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    registerLink: {
      color: theme.colors.primary,
      fontWeight: 'bold',
    },
    containerButton: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: theme.spacing.xl,
    },
    button: {
      width: '80%',
    },
  });

  return (
    <>
      {showFields && (
        <FieldsAuthForm 
          isRegister={isRegister}
          onFieldsChange={() => {}}
        />
      )}
      {!showFields && (
        <View style={ styles.containerButton }>
          <Button
            icon="google"
            text={isRegister ? 'Cadastrar com Google' : 'Entrar com Google'}
            onPress={googleHandler}
            backgroundColor={theme.colors.primary}
            textColor={theme.colors.white}
            style={ styles.button }
          />

          <Button
            icon="email"
            text={isRegister ? 'Cadastrar com Email' : 'Entrar com Email'}
            onPress={actionHandler}
            backgroundColor={theme.colors.secondary}
            textColor={theme.colors.textPrimary}
            style={ styles.button }
          />
        </View>
      )}
     
      {isRegister ? (
        <Text style={styles.registerText}>
          Já tem uma conta?{' '}
          <Text style={styles.registerLink} onPress={onChangeForm}>
            Entrar
          </Text>
        </Text>
      ) : (
        <Text style={styles.registerText}>
          Não tem uma conta?{' '}
          <Text style={styles.registerLink} onPress={onChangeForm}>
            Cadastre-se
          </Text>
        </Text>
      )}
    </>
  );
};
