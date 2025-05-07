import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

interface LoginCredentials {
  email: string;
  password: string;
}

const API_URL = process.env.EXPO_PUBLIC_API_URL || '';

export async function loginUser({ email, password }: LoginCredentials) {
  try {
    const response = await axios.post(`${API_URL}/api/v1/auth/login`, {
      auth: { email, password }
    });

    const { access_token, refresh_token } = response.data;
    
    if (typeof access_token !== 'string') {
      throw new Error('Token inválido');
    }
    
    await SecureStore.setItemAsync('access_token', access_token);
    await SecureStore.setItemAsync('refresh_token', refresh_token);
    
    return true;
  } catch (error: any) {
    console.log('aaaaaaaaaaah', error)
    console.error('Erro ao fazer login:', error);
    throw new Error(error?.response?.data?.error || 'Erro ao fazer login');
  }
}
