import React, { useState } from 'react';
import { View } from 'react-native';
import ImagePickerComponent from './ImagePickerComponent';
import DocumentPickerComponent from './DocumentPickerComponent';
import ImagePreviewComponent from './ImagePreviewComponent';
import { styles as commonStyles } from './styles';

const MediaPicker = ({ onFileChange, mode = 'both', initialImageUri = null, initialFileName = null }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  React.useEffect(() => {
    if (initialImageUri) {
      setSelectedFile({ uri: initialImageUri, type: 'image/jpeg' });
    } else if (initialFileName) {
      setSelectedFile({ name: initialFileName, type: 'application/pdf' });
    }
  }, [initialImageUri, initialFileName]);

  const handleFileSelected = (file) => {
    setSelectedFile(file);
    onFileChange(file);
  };

  return (
    <View style={commonStyles.container}>
      <View style={{ backgroundColor: '#F5F5F5', width: '100%', paddingVertical: 20, borderRadius: 8 }}>
        <View style={{ width: '100%', height: 200 }}>
          {selectedFile && (
            <ImagePreviewComponent file={selectedFile} onRemove={() => setSelectedFile(null)} />
          )}
        </View>
        <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
          {mode === 'image' && (
            <ImagePickerComponent onImageSelected={handleFileSelected} />
          )}
          {mode === 'document' && (
            <DocumentPickerComponent onFileSelected={handleFileSelected} />
          )}
          {mode === 'both' && (
            <View style={styles.buttonContainer}>
              <ImagePickerComponent onImageSelected={handleFileSelected} />
              <DocumentPickerComponent onFileSelected={handleFileSelected} />
            </View>
          )}
        </View>
      </View>

    </View>
  );
};

export default MediaPicker;
