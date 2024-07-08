import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useField } from 'formik';

const PickerField = ({ name, label, options, style, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={{flex: 1, marginTop: 5}}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.pickerContainer,
          meta.error && meta.touched ? styles.inputError : null,
          style,
        ]}>
        <Picker
          selectedValue={field.value}
          onValueChange={itemValue => helpers.setValue(itemValue)}
          {...props}>
          <Picker.Item
            // style={{color: '#222'}}
            label="Seleccione una opción"
            value=""
          />
          {options.map(option => (
            <Picker.Item
              // style={{color: '#222'}}
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>

      {meta.touched && meta.error && (
        <Text style={styles.errorText}>{meta.error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
    color:"#222"
  },
  pickerContainer: { // Estilos por defecto del TextInputField
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal:10,
    paddingVertical:0,
    justifyContent: 'center',
    height:40,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default PickerField;
