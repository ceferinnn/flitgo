import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Container from '../components/containers/Container';

const NotificacionesScreen = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (event, date) => {
        setShowDatePicker(false);
        if (date !== undefined) {
            setSelectedDate(date);
        }
    };

    const [notificaciones] = useState([
        { tipo: 'pedido', mensaje: 'HELENA SAC, pedido N° 10000045', fecha: '14/06/2024' },
        { tipo: 'error', mensaje: 'Su cuenta ha sido bloqueada. Comuníquese con soporte.', fecha: '12/06/2024' },
        { tipo: 'exito', mensaje: 'Se realizó tu depósito con éxito', fecha: '10/06/2024' },
        { tipo: 'info', mensaje: 'Solicitud de retiro n°00001 por s/230 fue aceptada.', fecha: '08/06/2024' },
    ]);

    return (
        <Container>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Filtro de reporte</Text>
                    <View style={styles.radioGroup}>
                        <TouchableOpacity style={styles.radioButton}>
                            <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
                            <Text style={styles.radioLabel}>Por fechas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.radioButton}>
                            <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
                            <Text style={styles.radioLabel}>Acumulado</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dateRange}>
                        <Text style={styles.dateLabel}>Del:</Text>
                        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInputContainer}>
                            <Text style={styles.dateInput}>{selectedDate.toLocaleDateString()}</Text>
                        </TouchableOpacity>

                        <Text style={styles.dateLabel}>Al:</Text>
                        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInputContainer}>
                            <Text style={styles.dateInput}>{selectedDate.toLocaleDateString()}</Text>
                        </TouchableOpacity>
                    </View>
                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDate}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                </View>

                <View style={styles.notificacionesContainer}>
                    {notificaciones.map((notificacion, index) => (
                        <TouchableOpacity key={index} style={[styles.notificacion, styles[`notificacion_${notificacion.tipo}`]]}>
                            <View style={styles.notificacionHeader}>
                                <Text style={styles.notificacionTexto}>{notificacion.mensaje}</Text>
                                <Text style={styles.notificacionFecha}>{notificacion.fecha}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    radioGroup: {
        flexDirection: 'row',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        flex: 1,
    },
    radioLabel: {
        marginLeft: 5,
    },
    dateRange: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    dateLabel: {
        marginRight: 5,
    },
    dateInputContainer: { // Nuevo contenedor para el input de fecha
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 5,
        marginRight: 10, // Margen derecho solo para el primer input
    },
    dateInput: {
        // No es necesario aplicar estilos aquí, ya que se heredan del contenedor
    },
    notificacionesContainer: {
        marginTop: 20,
    },
    notificacion: {
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
    },
    notificacionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5, // Espacio entre el mensaje y la fecha
    },
    notificacionTexto: {
        fontSize: 16,
        flex: 1, // Para que el texto ocupe el espacio disponible
    },
    notificacionFecha: {
        fontSize: 12,
        color: '#777', // Color gris claro para la fecha
    },
    notificacion_pedido: {
        backgroundColor: '#f0f0f0',
    },
    notificacion_error: {
        backgroundColor: '#ffebee',
        borderColor: '#f44336',
        borderWidth: 1,
    },
    notificacion_exito: {
        backgroundColor: '#e8f5e9',
    },
    notificacion_info: {
        backgroundColor: '#e3f2fd',
    },
});

export default NotificacionesScreen;
