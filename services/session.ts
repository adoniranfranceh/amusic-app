import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

interface LoginCredentials {
  email: string;
  password: string;
}

const API_URL = process.env.EXPO_PUBLIC_API_URL || '';

export async function loginUser({ email, password }: LoginCredentials) {
  try {
    const response = await axios(`${API_URL}/api/v1/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ email, password }),
    });

    if (response.status < 200 || response.status >= 300) {
      const error = response.data;
      throw new Error(error.message || 'Erro ao fazer login');
    }

    const data = await response.data

    await SecureStore.setItemAsync('token', data.token);

    return data.user;
  } catch (error) {
    throw error;
  }
}
