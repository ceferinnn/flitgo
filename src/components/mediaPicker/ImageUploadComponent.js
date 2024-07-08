import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from './styles';

const ImageUploadComponent = ({ onUploadRequest }) => { // Cambiamos la prop
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onUploadRequest} style={styles.button}>
        <Icon name="cloud-upload" size={24} color="white" />
        <Text style={styles.buttonText}>Subir Archivo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageUploadComponent;
