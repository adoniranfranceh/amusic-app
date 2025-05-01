import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@/context/ThemeContext';

export const WelcomeLayout = ({
  title,
  subtitle,
  buttonText,
  onPress,
  onBackPress,
  showBackButton,
  logoImage,
  children,
}: {
  title: string;
  subtitle: string;
  buttonText?: string;
  onPress?: () => void;
  onBackPress?: () => void;
  showBackButton: boolean;
  logoImage: any;
  colorScheme?: string | null;
  children?: React.ReactNode;
}) => {
  const { height } = useWindowDimensions();
  const { theme } = useTheme();
  
  const styles = StyleSheet.create({
    middleArea: {
      flex: 0.95,
    },
    topBar: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 10,
    },
    headerSection: {
      alignItems: 'center',
      paddingTop: height * 0.15,
    },
    logoWrapper: {
      shadowColor: theme.colors.accent,
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
      borderRadius: 25,
      marginBottom: theme.spacing.xl,
    },
    logo: {
      width: 100,
      height: 100,
      borderRadius: 25,
    },
    title: {
      fontSize: theme.fontSizes.xl,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.sm,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: theme.fontSizes.base,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginBottom: theme.spacing.xl,
    },
    childrenContainer: {
      width: '100%',
      alignItems: 'center',
      marginBottom: theme.spacing.xl,
    },
    buttonContainer: {
      width: '100%',
      alignItems: 'center',
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.xl,
    },
    button: {
      ...theme.button.primary,
      ...theme.shadows.button,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.xl,
      minWidth: 200,
    },
    buttonText: {
      ...theme.button.text,
      fontSize: theme.fontSizes.md,
      color: theme.colors.white,
      textAlign: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.middleArea}>
      <View>
        <View/>
        { showBackButton && (
          <Pressable onPress={onBackPress} style={styles.topBar}>
            <Icon name="arrow-left" size={28} color={theme.colors.textPrimary} />
          </Pressable>
        )}

        <View>
          <View style={styles.headerSection}>
            <View style={styles.logoWrapper}>
              <Image source={logoImage} style={styles.logo} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          
          {children && (
            <View style={styles.childrenContainer}>
              {children}
            </View>
          )}
          
          {buttonText && onPress && (
            <View style={styles.buttonContainer}>
              <Pressable
                onPress={onPress}
                style={({ pressed, hovered }) => [
                  styles.button,
                  pressed && {
                    transform: [{ scale: 0.96 }],
                    backgroundColor: theme.colors.primaryPressed,
                  },
                  hovered && { backgroundColor: theme.colors.primaryHovered },
                ]}
              >
                <Text style={styles.buttonText}>{buttonText}</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
