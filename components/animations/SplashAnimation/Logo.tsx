import React from 'react';
import { Animated, Image, StyleSheet } from 'react-native';

interface LogoProps {
  rotate: Animated.AnimatedInterpolation<string | number>;
}

const Logo: React.FC<LogoProps> = ({ rotate }) => {
  return (
    <Animated.View style={[styles.logoContainer, { transform: [{ rotate }] }]}>
      <Image
        source={require('@/assets/images/AMusic-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
  },
  logo: {
    width: 500,
    height: 500,
    position: 'absolute',
    top: -100,
    left: -100,
  },
});

export default Logo;
