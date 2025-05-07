import api from './api';

export async function getCurrentUser() {  
  const res = await api.get('/api/v1/auth/me');
  return res.data;
}
