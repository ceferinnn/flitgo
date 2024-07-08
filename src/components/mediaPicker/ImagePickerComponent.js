import React from 'react';
import { View, TouchableOpacity, Image, Alert, Text, Platform } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from './styles';

const ImagePickerComponent = ({ onImageSelected }) => {
  const requestCameraPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Permiso de Cámara',
            message: 'Necesitamos acceder a tu cámara para tomar fotos.',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        // En iOS, los permisos de cámara se solicitan automáticamente al usar launchCamera
        return true;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const handleTakePhoto = async () => {
    if (await requestCameraPermission()) {
      try {
        const result = await launchCamera({
          mediaType: 'photo',
          quality: 0.5,
          saveToPhotos: true,
        });

        if (!result.didCancel) {
          onImageSelected(result.assets[0]);
        }
      } catch (error) {
        Alert.alert('Error', 'Hubo un problema al tomar la foto');
      }
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleTakePhoto} style={styles.button}>
        <Icon name="camera" size={24} color="white" />
        <Text style={styles.buttonText}>Tomar Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComponent;
