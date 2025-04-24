import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

export const WelcomeLayout = ({
  title,
  subtitle,
  buttonText,
  onPress,
  logoImage,
  theme,
  children,
}: {
  title: string;
  subtitle: string;
  buttonText?: string;
  onPress?: () => void;
  logoImage: any;
  theme: any;
  colorScheme: string | null;
  children?: React.ReactNode;
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: theme.colors.background,
    },
    overlay: {
      position: 'absolute',
      backgroundColor: theme.colors.overlay,
      height: '100%',
      width: '100%',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.lg,
    },
    logoWrapper: {
      shadowColor: theme.colors.white,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
      borderRadius: 25,
      marginBottom: theme.spacing.xl,
    },
    logo: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      borderRadius: 25,
    },
    title: {
      fontSize: theme.fontSizes.xl,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.sm,
    },
    subtitle: {
      fontSize: theme.fontSizes.base,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginBottom: theme.spacing.xl,
    },
    button: {
      ...theme.button.primary,
      ...theme.shadows.button,
      marginBottom: theme.spacing.md,
    },
    buttonText: {
      ...theme.button.text,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.logoWrapper}>
          <Image source={logoImage} style={styles.logo} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        {children}

        {buttonText && onPress && (
          <Pressable
            onPress={onPress}
            style={({ pressed, hovered }) => [
              styles.button,
              pressed && { transform: [{ scale: 0.96 }], backgroundColor: theme.colors.primaryPressed },
              hovered && { backgroundColor: theme.colors.primaryHovered },
            ]}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </Pressable>
        
        )}
      </ScrollView>
    </View>
  );
};
