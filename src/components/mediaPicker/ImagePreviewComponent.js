import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles, colors } from './styles';

const ImagePreviewComponent = ({ file, onRemove }) => { // Nueva prop 'height'
    const isImage = file && file.type && file.type.startsWith('image/');
    const imageSource = isImage ? { uri: file.uri } : null;

    return (
        <View style={[styles.container]}>
            {imageSource && <Image source={imageSource} style={styles.image} />}
            {!isImage && file && file.name && ( // Verificar si file.name existe
                <View style={styles.pdfIconContainer}>
                    <Ionicons name="document-text-outline" size={80} color={colors.primary} />
                    <Text style={styles.pdfFileName}>{file.name}</Text>
                </View>
            )}
            <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
                <Ionicons name="close-circle" size={24} color={colors.secondary} />
            </TouchableOpacity>
        </View>
    );
};


export default ImagePreviewComponent;
