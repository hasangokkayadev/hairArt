import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DIMENSIONS = {
  // Screen dimensions
  screenWidth: width,
  screenHeight: height,
  
  // Padding & Margin
  paddingHorizontal: 20,
  paddingVertical: 16,
  
  // Border radius
  borderRadiusSmall: 6,
  borderRadiusMedium: 12,
  borderRadiusLarge: 20,
  
  // Font sizes
  fontSizeSmall: 12,
  fontSizeMedium: 16,
  fontSizeLarge: 20,
  fontSizeXLarge: 24,
  
  // Icon sizes
  iconSmall: 16,
  iconMedium: 24,
  iconLarge: 32,
  
  // Header height
  headerHeight: Platform.OS === 'ios' ? 44 : 56,
  
  // Tab bar height
  tabBarHeight: Platform.OS === 'ios' ? 80 : 60,
};