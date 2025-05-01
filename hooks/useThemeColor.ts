/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { lightTheme, darkTheme } from '@/constants/theme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof (typeof lightTheme)['colors']
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme as 'light' | 'dark'];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    const themeColors = theme === 'light' ? lightTheme.colors : darkTheme.colors;
    return themeColors[colorName];
  }
}
