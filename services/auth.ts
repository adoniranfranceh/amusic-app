import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = process.env.EXPO_PUBLIC_API_URL || '';

export async function getCurrentUser() {
  const token = await SecureStore.getItemAsync('token');
  if (!token) return null;

  const res = await axios(`${API_URL}/api/v1/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status < 200 || res.status >= 300) return null;

  return res.data;
}
