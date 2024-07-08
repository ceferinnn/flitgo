import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import Container from '../../components/containers/Container';
import Button from '../../components/Button';


const PorServicioRetirarScreen = ({navigation}) => {
    const [loadingButton, setLoadingButton] = useState(false);

    const handleSubmit = async () => {
        setLoadingButton(true);
        try {
            // Aquí iría la lógica para enviar la petición de retiro
            // Simulamos una demora
            await new Promise(resolve => setTimeout(resolve, 1000));
            navigation.navigate("PorServicioRetirarConfirmado");
        } catch (error) {
            console.error('Error al procesar el retiro:', error);
            // Aquí manejarías errores, mostrando mensajes al usuario, etc.
        } finally {
            setLoadingButton(false);
        }
    };

    return (
        <Container>
            <ScrollView style={styles.content}>
                <Text style={styles.title}>Total a retirar:</Text>
                <Text style={styles.total}>S/ 830.00</Text>

                <Text style={styles.instructions}>
                    Genere una <Text style={{ fontWeight: 'bold' }}>factura electrónica</Text> con la siguiente información y suba el archivo XML:
                </Text>

                <View style={{ marginVertical: 10 }}>
                    <Button secondary small title="Subir XML" style={{ width: 100, margin: 'auto' }} />
                </View>


                <View style={styles.facturaContainer}>
                    <Text style={styles.facturaSectionTitle}>Receptor:</Text>
                    <Text style={styles.facturaData}>RAZÓN SOCIAL: FLITGO S.A.C.</Text>
                    <Text style={styles.facturaData}>RUC: 20509357429</Text>

                    <Text style={styles.facturaSectionTitle}>Emisor:</Text>
                    <Text style={styles.facturaData}>RAZÓN SOCIAL: JUAN PEÑA OLIVARES LAZO</Text>
                    <Text style={styles.facturaData}>RUC: XXXXXXXXXXXXX</Text>

                    <Text style={styles.facturaSectionTitle}>DETALLE:</Text>
                    <Text style={styles.facturaData}>COMISIÓN POR SERVICIO REPARTO</Text>
                    <View style={styles.facturaDetalleRow}>
                        <Text style={styles.facturaDetalleLabel}>IMPORTE</Text>
                        <Text style={styles.facturaDetalleValue}>S/ 703.39</Text>
                    </View>
                    <View style={styles.facturaDetalleRow}>
                        <Text style={styles.facturaDetalleLabel}>IGV</Text>
                        <Text style={styles.facturaDetalleValue}>S/ 126.61</Text>
                    </View>
                    <View style={styles.facturaDetalleRow}>
                        <Text style={styles.facturaDetalleLabel}>TOTAL</Text>
                        <Text style={styles.facturaDetalleValue}>S/ 830.00</Text>
                    </View>
                    <Text style={styles.facturaData}>N° CTA BCP: 191-256254158-99</Text>
                </View>

            </ScrollView>
            <Button title="Retirar" loading={loadingButton} iconName="arrow-redo-outline" primary onPress={()=>handleSubmit()} />
        </Container>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10, textAlign: 'center'
    },
    total: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#18B3E3',
        marginBottom: 20, textAlign: 'center'
    },
    instructions: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 15,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    textButton: {
        backgroundColor: '#18B3E3',
        borderRadius: 10,
        padding: 15,
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        marginTop: 15,
    },
    facturaContainer: {
        marginBottom: 20,
    },
    facturaSectionTitle: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    facturaData: {
        marginBottom: 5,
    },
    facturaDetalleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    facturaDetalleLabel: {
        flex: 1,
    },
    facturaDetalleValue: {
        textAlign: 'right',
    },
});

export default PorServicioRetirarScreen;
