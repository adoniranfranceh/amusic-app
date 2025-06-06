import { useEffect, useState } from 'react';
import { View } from 'react-native';
import SplashAnimation from '@/components/animations/SplashAnimation';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context';

export default function Index() {
  const router = useRouter();
  const { loadingInitial, isAuthenticated } = useAuth();
  
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    if (animationFinished && !loadingInitial) {
      router.replace(isAuthenticated ? '/(protected)/(tabs)' : '/(auth)');
    }
  }, [animationFinished, loadingInitial]);

  return (
    <View style={{ flex: 1 }}>
      <SplashAnimation
        onAnimationEnd={() => setAnimationFinished(true)}
      />
    </View>
  );
}
