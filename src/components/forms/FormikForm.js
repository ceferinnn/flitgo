import React from 'react';
import { Formik } from 'formik';
import { View, Text, StyleSheet } from 'react-native';

const FormikForm = ({ initialValues, validationSchema, children, style, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit, errors, touched, isSubmitting, values, setFieldValue }) => (
                <View style={[styles.formContainer, style]}>
                    {typeof children === 'function' ? children({ handleSubmit, isSubmitting, values, setFieldValue }) : children}
                    {Object.keys(errors).length > 0 && (
                        <View style={styles.errorContainer}>
                            {Object.keys(errors).map(key => (
                                <Text key={key} style={styles.errorText}>
                                    {touched[key] && errors[key]}
                                </Text>
                            ))}
                        </View>
                    )}
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        // Estilos básicos del formulario (padding, etc.)
    },
    errorContainer: {
        marginTop: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 5,
    },
});

export default FormikForm;
