import React, { useState, useEffect } from 'react';
import { WelcomeLayout } from '@/components/layouts/WelcomeLayout';
import { AuthForm } from '@/components/auth/AuthForm';
import { useColorScheme } from 'react-native';
import Head from 'expo-router/head';
import { View } from 'react-native';
import { useTheme } from '@/context';

export default function AuthScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const { theme } = useTheme();
  const [showFields, setShowFields] = useState<boolean>(false);
  const [step, setStep] = useState<'welcome' | 'login' | 'register'>('welcome');

  const handleLogin = () => {
    setShowFields(true);
  };

  const handleRegister = () => {
    setShowFields(true);
  };

  const onChangeForm = () => {
    setShowFields(false);
    setStep((prevStep) => (prevStep === 'login' ? 'register' : 'login'));
  }
  
  const onBackPress = () => {
    setStep((prevStep) => (prevStep === 'login' ? 'welcome' : 'login'));
    setShowFields(false);
  };

  const handleGoogleSignup = () => {
    console.log('com Google...');
  };

  const titles = {
    welcome: 'Bem-vindo ao AMusic',
    login: 'Entrar',
    register: 'Criar conta',
  };

  const subtitles = {
    welcome: 'Sua trilha sonora favorita começa aqui 🎶',
    login: 'Sua trilha sonora favorita começa aqui 🎶',
    register: 'Comece sua jornada musical',
  };

  const forms = {
    welcome: null,
    login: (
      <AuthForm
        title={titles.login}
        subtitle={subtitles.login}
        actionText="Entrar"
        actionHandler={handleLogin}
        googleHandler={handleGoogleSignup}
        isRegister={false}
        onChangeForm={onChangeForm}
        showFields={showFields}
      />
    ),
    register: (
      <AuthForm
        title={titles.register}
        subtitle={subtitles.register}
        actionText="Criar conta"
        actionHandler={handleRegister}
        googleHandler={handleGoogleSignup}
        isRegister={true}
        onChangeForm={onChangeForm}
        showFields={showFields}
      />
    ),
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>  
      <Head>
        <title>Entrar • Amusic</title>
      </Head>
      { !showFields && ( 
        <WelcomeLayout
          title={titles[step]}
          subtitle={subtitles[step]}
          buttonText={step === 'welcome' ? 'Explorar agora' : undefined}
          onPress={step === 'welcome' ? () => setStep('login') : undefined}
          logoImage={require('@/assets/images/AMusic-logo.png')}
          colorScheme={colorScheme}
          onBackPress={onBackPress}
          showBackButton={step !== 'welcome'}
        >
      </WelcomeLayout>
      )}
        <View style={{ marginTop: theme.spacing.xl }} >
          {forms[step]}
        </View>
    </View>
  );
}
