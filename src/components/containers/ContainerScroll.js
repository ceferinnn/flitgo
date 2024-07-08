// Archivo: components/Container.js
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

const ContainerScroll = ({ children }) => (
  <ScrollView contentContainerStyle={styles.container}>
    {children}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  }
});

export default ContainerScroll;
