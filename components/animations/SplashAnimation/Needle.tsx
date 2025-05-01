import React from 'react';
import { Animated, Image, StyleSheet } from 'react-native';

interface NeedleProps {
  needleAnim: Animated.Value;
}

const Needle: React.FC<NeedleProps> = ({ needleAnim }) => {
  const needleRotate = needleAnim.interpolate({
    inputRange: [0, 1.5],
    outputRange: ['-10deg', '-1deg'],
  });

  return (
    <Animated.Image
      source={require('@/assets/images/needle-only.png')}
      style={[styles.needle, { transform: [{ rotate: needleRotate }] }]}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
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

export default Needle;
