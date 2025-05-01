import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, GestureResponderEvent } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ButtonProps {
  icon: string;
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor: string;
  textColor: string;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({ 
  icon,
  text,
  onPress,
  backgroundColor,
  textColor,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor, ...style }]}>
      <View style={styles.innerContainer}>
        <Icon name={icon} size={20} color={textColor} style={{ marginRight: 10 }} />
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Button;
