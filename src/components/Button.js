import React from 'react';
import { Pressable, Text, StyleSheet,ActivityIndicator, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Button = ({
    title,
    onPress,
    primary,
    secondary,
    disabled,
    iconName,
    iconSize = 24,
    small,
    style,
    white,
    backgroundColor,
    styleFont,
    iconColor,
    loading, // Nueva prop para el estado de carga
    iconSet = "Ionicons",
    ...props
  }) => {
    const buttonStyles = [
      styles.button,
      primary && styles.primary,
      secondary && styles.secondary,
      white && styles.white,
      backgroundColor && { backgroundColor },
      disabled && styles.disabled,
      small && styles.smallButton,
      style,
      loading && styles.loadingButton, // Estilo para el botón en estado de carga (opcional)
    ];
  
    const textStyles = [
      styles.text,
      white && styles.whiteText,
      styleFont,
      small && styles.smallText,
      disabled && styles.disabledText,
    ];
  
    const iconColorFinal = iconColor || getIconColor(disabled, primary, secondary, white);
    const IconComponent = iconSet === "Ionicons" ? Ionicons : FontAwesome5;
  
    return (
      <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator  color="white" size="small" />
      ) : (
        <>
          {iconName && <IconComponent style={{marginRight:10}} name={iconName} size={iconSize} color={iconColorFinal} />}
          <Text style={textStyles}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
    );
  };

const getIconColor = (disabled, primary, secondary, white) => {
    if (disabled) return '#ccc';
    if (primary || secondary || white) return 'white'; // Change default color to white
    return '#FFF';
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor:'#CCC'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    primary: {
        backgroundColor: '#18B3E3',
    },
    secondary: {
        backgroundColor: '#FBAF26',
    },
    disabled: {
        backgroundColor: '#ccc',
    },
    disabledText: {
        color: '#666',
    },
    smallButton: { // Style for small buttons
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    smallText: { // Style for text in small buttons
        fontSize: 14,
    },
    white: {
        backgroundColor: 'white',
    },
    whiteText: {
        color: 'black',
    },
    iconOnlyButton: {
        paddingHorizontal: 12, // Adjust horizontal padding for icon-only buttons
    },
    icon: {
        marginLeft: 10,
    }
});

export default Button;
