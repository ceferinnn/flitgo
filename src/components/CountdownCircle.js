import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Text } from 'react-native-svg';

const CountdownCircle = ({ initialSeconds = 60 }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = remainingSeconds >= 60
    ? `${Math.floor(remainingSeconds / 60)}m ${remainingSeconds % 60}s`
    : `${remainingSeconds}s`;

  const strokeDashoffset = (remainingSeconds / initialSeconds) * 283; // 283 es la circunferencia del círculo

  return (
    <Svg height="150" width="150" viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="#231F20"
        strokeWidth="10"
        fill="none"
      />
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="#E1E1E1"
        strokeWidth="10"
        strokeDasharray="283"
        strokeDashoffset={strokeDashoffset}
        fill="none"
      />
      <Text
        x="50"
        y="55" // Ajusta este valor para centrar verticalmente
        textAnchor="middle" // Centra el texto horizontalmente
        fontSize="18"
        fill="#000" // Color del texto
      >
        {formattedTime}
      </Text>
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginTop: 10,
  },
});

export default CountdownCircle;
