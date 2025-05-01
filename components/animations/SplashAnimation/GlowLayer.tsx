import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const GlowLayer = () => {
  const totalLayers = 8;
  const layers = [];

  layers.push(
    <View
      key="core"
      style={[styles.glowLayer, { width: 120, height: 120, borderRadius: 60, opacity: 0.9 }]}
    />
  );

  for (let i = 0; i < totalLayers; i++) {
    const scale = 1 + i * 0.2;
    const opacity = 0.7 - i * 0.08;
    layers.push(
      <View
        key={`layer-${i}`}
        style={[
          styles.glowLayer,
          {
            width: 130 * scale,
            height: 130 * scale,
            borderRadius: 100 * scale,
            opacity: Math.max(opacity, 0.05),
          },
        ]}
      />
    );
  }

  return <>{layers}</>;
};

const styles = StyleSheet.create({
  glowLayer: {
    position: 'absolute',
    backgroundColor: Colors.golden_tainoi,
  },
});

export default GlowLayer;
