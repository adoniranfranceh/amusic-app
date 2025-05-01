import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import Logo from './Logo';
import { timings, percent } from './animationTiming';

const { width } = Dimensions.get('window');

export default function SplashAnimation({ onAnimationEnd }: { onAnimationEnd: () => void }) {
  const needleAnim = useRef(new Animated.Value(7)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const glowOpacity = useRef(new Animated.Value(0)).current;
  const glowScale = useRef(new Animated.Value(0.9)).current;
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(1)).current;
  const logoPosition = useRef(new Animated.Value(1)).current;

  const needleRotate = needleAnim.interpolate({
    inputRange: [0, 1.5],
    outputRange: ['-10deg', '-1deg'],
  });

  const diskRotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const logoScaleAnimation = logoPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });

  const logoOpacityAnimation = logoPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const needleAndGlowStart = () => {
    Animated.timing(needleAnim, {
      toValue: 1.5,
      duration: timings.needle * 0.75,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(glowOpacity, {
        toValue: 1,
        duration: timings.glowIn * 0.75,
        useNativeDriver: true,
      }).start();

      Animated.timing(glowScale, {
        toValue: 1.1,
        duration: percent(15),
        useNativeDriver: true,
      }).start();

      Animated.timing(logoScale, {
        toValue: 1,
        duration: timings.logoScale * 0.75,
        useNativeDriver: true,
      }).start(() => {
        Animated.loop(
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: percent(60),
            useNativeDriver: true,
          })
        ).start();

        Animated.timing(needleAnim, {
          toValue: 2,
          duration: percent(25),
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(logoPosition, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }).start(() => onAnimationEnd());
        });
      });
    });
  };

  useEffect(() => {
    needleAndGlowStart();
  }, []);

  const renderGlowLayers = () => {
    const totalLayers = 8;
    const layers = [];

    layers.push(
      <View 
        key="core" 
        style={[
          styles.glowLayer, 
          { 
            width: 120, 
            height: 120, 
            borderRadius: 60,
            opacity: 0.9
          }
        ]} 
      />
    );
    
    for (let i = 0; i < totalLayers; i++) {
      const scale = 1 + (i * 0.2);
      const opacity = 0.7 - (i * 0.08);
      
      layers.push(
        <View
          key={`layer-${i}`}
          style={[
            styles.glowLayer,
            {
              width: 130 * scale,
              height: 130 * scale,
              borderRadius: 100 * scale,
              opacity: opacity > 0.05 ? opacity : 0.05,
            }
          ]}
        />
      );
    }
    
    return layers;
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.glowContainer,
          {
            opacity: glowOpacity,
            transform: [{ scale: glowScale }],
          },
        ]}
      >
        {renderGlowLayers()}
      </Animated.View>

      <Animated.View
        style={{
          transform: [{ scale: logoScaleAnimation }],
          opacity: logoOpacityAnimation,
          zIndex: 2,
        }}
      >
        <Logo
          rotate={diskRotate}
        />
      </Animated.View>

      <Animated.Image
        source={require('@/assets/images/needle-only.png')}
        style={[
          styles.needle,
          {
            transform: [{ rotate: needleRotate }],
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glowContainer: {
    position: 'absolute',
    width: 500,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  glowLayer: {
    position: 'absolute',
    backgroundColor: Colors.golden_tainoi,
  },
  needle: {
    position: 'absolute',
    width: 230,
    height: 300,
    top: '15%',
    left: '57%',
    transformOrigin: 'left bottom',
    zIndex: 3,
  },
});
