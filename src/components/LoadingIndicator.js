import React, { useState, useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { API_URL } from '../constants';
import { AuthContext } from '../contexts/AuthContext';

export const useFetchWithLoading = () => {
  const { user } = useContext(AuthContext);
  const token = user.data.payload.token;
  const [loading, setLoading] = useState(false);

  const fetchData = async (url, options = {}) => {
    setLoading(true);
    try {
      const response = await fetch(API_URL + url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      throw error;
    }
  };

  return { fetchData, loading };
};

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});