import { Colors } from './Colors';

export const lightTheme = {
  colors: {
    background: Colors.linen,
    backgroundSecondary: Colors.fantasy,
    primary: Colors.chilean_fire,
    primaryPressed: 'rgba(255, 87, 34, 0.50)',
    primaryHovered: 'rgba(255, 87, 34, 0.95)',
    secondary: Colors.mosque,
    accent: Colors.golden_tainoi,
    vinylBlack: Colors.coffee_bean,
    redCenter: Colors.medium_carmine,
    cream: Colors.old_lace,
    textPrimary: Colors.night_rider,
    textSecondary: Colors.mortar,
    white: Colors.white,
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
      shadowColor: Colors.coffee_bean,
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
    },
    button: {
      shadowColor: Colors.medium_carmine,
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 6,
      elevation: 4,
    },
  },

  button: {
    primary: {
      backgroundColor: Colors.chilean_fire,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 30,
    },
    accent: {
      backgroundColor: Colors.golden_tainoi,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 30,
    },
    text: {
      color: Colors.white,
      fontSize: 18,
      fontFamily: 'Rubik',
    },
  },
};

export const darkTheme = {
  colors: {
    background: Colors.bokara_grey,
    backgroundSecondary: Colors.bokara_grey_secondary,
    primary: Colors.chilean_fire,
    primaryPressed: 'rgba(255, 87, 34, 0.50)',
    primaryHovered: 'rgba(255, 87, 34, 0.95)',
    secondary: Colors.mosque,
    accent: Colors.golden_tainoi,
    vinylBlack: Colors.wood_bark,
    redCenter: Colors.medium_carmine,
    cream: Colors.half_colonial_white,
    textPrimary: Colors.linen,
    textSecondary: Colors.very_light_grey,
    white: Colors.white,
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
      shadowColor: Colors.black,
      shadowOpacity: 0.15,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 5,
      elevation: 3,
    },
    button: {
      shadowColor: Colors.chilean_fire,
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 6,
      elevation: 5,
    },
  },

  button: {
    primary: {
      backgroundColor: Colors.chilean_fire,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 30,
    },
    accent: {
      backgroundColor: Colors.golden_tainoi,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 30,
    },
    text: {
      color: Colors.linen,
      fontSize: 18,
      fontFamily: 'Rubik',
    },
  },
};
