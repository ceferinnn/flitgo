import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BannerAlerta = ({ alerta, alertas, setAlertas, onPress }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animation, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.delay(3000),
      Animated.timing(animation, { toValue: 0, duration: 300, useNativeDriver: true }),
    ]).start(() => {
      // Eliminar la alerta después de que la animación termine
      setAlertas(prevAlertas => prevAlertas.filter(a => a.id !== alerta.id));
    });
  }, [alerta, alertas, setAlertas]);

  return (
    <Animated.View
      style={[
        styles.banner,
        {
          opacity: animation,
          transform: [{ translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, 0],
          }) }],
        }
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.bannerText}>{alerta.mensaje}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 10,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BannerAlerta;
