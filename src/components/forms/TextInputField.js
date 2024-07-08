import React from 'react';
import { View,TextInput, Text, StyleSheet } from 'react-native';
import { useField } from 'formik';

const TextInputField = ({ name, label, style, ...props }) => { // Añadimos 'style'
  const [field, meta] = useField(name);

  return (
    <View style={{flex:1}}>
      {label && (
        <Text style={styles.label}>{label}</Text>
      )}
      
      <TextInput
        style={[styles.input, meta.error && meta.touched ? styles.inputError : null, style]} // Combinamos estilos
        onChangeText={field.onChange(name)}
        onBlur={field.onBlur(name)}
        value={field.value}
        {...props} 
      />
      {meta.touched && meta.error ? (
        <Text style={styles.errorText}>{meta.error}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
    color:'#222',
    marginTop:5
  },
  input: { // Estilos por defecto del TextInputField
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color:"#222",
    paddingHorizontal:10,
    paddingVertical:5,
    minHeight:40
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default TextInputField;
