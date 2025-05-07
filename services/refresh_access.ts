import * as SecureStore from 'expo-secure-store'
import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL || '';

export async function refreshAccessToken() {
  const refreshToken = await SecureStore.getItemAsync('refresh_token');
  console.log('Refresh token no refresh:', refreshToken);
  if (!refreshToken) throw new Error('Refresh token não encontrado');

  const response = await axios.post(`${API_URL}/api/v1/auth/refresh`, {
    refresh_token: refreshToken,
  });

  const { access_token, refresh_token: new_refresh_token } = response.data;

  await SecureStore.setItemAsync('access_token', access_token);
  await SecureStore.setItemAsync('refresh_token', new_refresh_token);

  return access_token;
}
