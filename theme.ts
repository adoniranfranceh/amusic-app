import { colors } from './colors';

export const lightTheme = {
  colors: {
    background: colors.linen,
    background_second: colors.fantasy,
    primary: colors.chilean_fire,
    primaryPressed: 'rgba(255, 87, 34, 0.50)',
    primaryHovered: 'rgba(255, 87, 34, 0.95)',
    secondary: colors.mosque,
    accent: colors.golden_tainoi,
    vinylBlack: colors.coffee_bean,
    redCenter: colors.medium_carmine,
    cream: colors.old_lace,
    textPrimary: colors.night_rider,
    textSecondary: colors.mortar,
    white: colors.white,
    overlay: 'rgba(58, 45, 40, 0.1)',
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    base: 16,
    md: 18,
    lg: 24,
    xl: 28,
    xxl: 32,
  },

  fonts: {
    regular: 'Rubik_400Regular',
    medium: 'Rubik_500Medium',
    bold: 'Rubik_700Bold',
  },

  borderRadius: {
    sm: 6,
    md: 12,
    lg: 24,
    pill: 50,
  },

  shadows: {
    card: {
      shadowColor: colors.coffee_bean,
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
    },
    button: {
      shadowColor: colors.medium_carmine,
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 6,
      elevation: 4,
    },
  },

  button: {
    primary: {
      backgroundColor: colors.chilean_fire,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 30,
    },
    accent: {
      backgroundColor: colors.golden_tainoi,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 30,
    },
    text: {
      color: colors.white,
      fontSize: 18,
      fontFamily: 'Rubik',
    },
  },
};

export const darkTheme = {
  colors: {
    background: colors.bokara_grey,
    background_second: colors.bokara_grey_secondary,
    primary: colors.chilean_fire,
    primaryPressed: 'rgba(255, 87, 34, 0.50)',
    primaryHovered: 'rgba(255, 87, 34, 0.95)',
    secondary: colors.mosque,
    accent: colors.golden_tainoi,
    vinylBlack: colors.wood_bark,
    redCenter: colors.medium_carmine,
    cream: colors.half_colonial_white,
    textPrimary: colors.linen,
    textSecondary: colors.very_light_grey,
    white: colors.white,
    overlay: 'rgba(250, 244, 230, 0.05)',
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    base: 16,
    md: 18,
    lg: 24,
    xl: 28,
    xxl: 32,
  },

  fonts: {
    regular: 'Rubik_400Regular',
    medium: 'Rubik_500Medium',
    bold: 'Rubik_700Bold',
  },

  borderRadius: {
    sm: 6,
    md: 12,
    lg: 24,
    pill: 50,
  },

  shadows: {
    card: {
      shadowColor: colors.black,
      shadowOpacity: 0.15,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 5,
      elevation: 3,
    },
    button: {
      shadowColor: colors.chilean_fire,
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 6,
      elevation: 5,
    },
  },

  button: {
    primary: {
      backgroundColor: colors.chilean_fire,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 30,
    },
    accent: {
      backgroundColor: colors.golden_tainoi,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 30,
    },
    text: {
      color: colors.linen,
      fontSize: 18,
      fontFamily: 'Rubik',
    },
  },
};
