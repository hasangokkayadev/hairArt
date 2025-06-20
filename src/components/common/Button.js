import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../utils/constants/colors';
import { DIMENSIONS } from '../../utils/constants/dimensions';

const Button = ({
  title,
  onPress,
  variant = 'primary', // primary, secondary, outline, text
  size = 'medium', // small, medium, large
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left', // left, right
  style,
  textStyle,
  ...props
}) => {
  const buttonStyles = [
    styles.button,
    styles[`button_${variant}`],
    styles[`button_${size}`],
    disabled && styles.buttonDisabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`text_${variant}`],
    styles[`text_${size}`],
    disabled && styles.textDisabled,
    textStyle,
  ];

  const iconColor = variant === 'primary' 
    ? COLORS.white 
    : variant === 'outline' 
    ? COLORS.primary 
    : COLORS.textPrimary;

  const renderContent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? COLORS.white : COLORS.primary}
        />
      );
    }

    return (
      <View style={styles.content}>
        {icon && iconPosition === 'left' && (
          <Ionicons
            name={icon}
            size={DIMENSIONS.iconMedium}
            color={iconColor}
            style={styles.iconLeft}
          />
        )}
        
        <Text style={textStyles}>{title}</Text>
        
        {icon && iconPosition === 'right' && (
          <Ionicons
            name={icon}
            size={DIMENSIONS.iconMedium}
            color={iconColor}
            style={styles.iconRight}
          />
        )}
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: DIMENSIONS.borderRadiusMedium,
    flexDirection: 'row',
  },
  
  // Variants
  button_primary: {
    backgroundColor: COLORS.primary,
  },
  button_secondary: {
    backgroundColor: COLORS.secondary,
  },
  button_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  button_text: {
    backgroundColor: 'transparent',
  },
  
  // Sizes
  button_small: {
    height: 36,
    paddingHorizontal: 16,
  },
  button_medium: {
    height: 48,
    paddingHorizontal: 24,
  },
  button_large: {
    height: 56,
    paddingHorizontal: 32,
  },
  
  // Disabled
  buttonDisabled: {
    opacity: 0.6,
  },
  
  // Content
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Text styles
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  text_primary: {
    color: COLORS.white,
  },
  text_secondary: {
    color: COLORS.white,
  },
  text_outline: {
    color: COLORS.primary,
  },
  text_text: {
    color: COLORS.primary,
  },
  
  // Text sizes
  text_small: {
    fontSize: DIMENSIONS.fontSizeSmall,
  },
  text_medium: {
    fontSize: DIMENSIONS.fontSizeMedium,
  },
  text_large: {
    fontSize: DIMENSIONS.fontSizeLarge,
  },
  
  textDisabled: {
    opacity: 0.6,
  },
  
  // Icons
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default Button;