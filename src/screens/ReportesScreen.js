import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';

import Container from '../components/containers/Container';

const ReportesScreen = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (event, date) => {
        setShowDatePicker(false);
        if (date !== undefined) {
            setSelectedDate(date);
        }
    };

    return (
        <Container>
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
                    <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ flex: 1, marginRight: 10 }}>
                        <Text style={styles.dateInput}>{selectedDate.toLocaleDateString()}</Text>
                    </TouchableOpacity>

                    <Text style={styles.dateLabel}>Al:</Text>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ flex: 1 }}>
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
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tipo de vehículo</Text>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity style={styles.typeButton}>
                            <Text style={styles.typeButtonText}>Todos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.typeButton}>
                            <FontAwesome5 name="car" size={20} color="black" />
                            <Text style={styles.typeButtonText}>Auto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.typeButton}>
                            <FontAwesome5 name="motorcycle" size={20} color="black" />
                            <Text style={styles.typeButtonText}>Moto</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Métricas</Text>

                    {/* Fila 1: Envíos y Pedidos */}
                    <View style={styles.metricRow}>
                        <View style={styles.metricItem}>
                            <Ionicons name="cube" size={32} color="#18B3E3" />
                            <Text style={styles.metricValue}>65</Text>
                            <Text style={styles.metricLabel}>Envíos realizados</Text>
                        </View>
                        <View style={styles.metricItem}>
                            <Ionicons name="receipt" size={32} color="#FBAF26" />
                            <Text style={styles.metricValue}>670</Text>
                            <Text style={styles.metricLabel}>Pedidos realizados</Text>
                        </View>
                    </View>

                    {/* Fila 2: Entregados/Recogidos y No Entregados/Parciales */}
                    <View style={styles.metricRow}>
                        <View style={styles.metricItem}>
                            <Ionicons name="checkmark-circle" size={32} color="green" />
                            <Text style={styles.metricValue}>650 / 8</Text>
                            <Text style={styles.metricLabel}>Pedidos entregados y recogidos</Text>
                        </View>
                        <View style={styles.metricItem}>
                            <Ionicons name="close-circle" size={32} color="red" />
                            <Text style={styles.metricValue}>7 / 3</Text>
                            <Text style={styles.metricLabel}>Pedidos no entregados y parciales</Text>
                        </View>
                    </View>

                    <View style={styles.metricRow}>
                        <View style={styles.metricItem}>
                            <Ionicons name="alert-circle" size={32} color="orange" />
                            <Text style={styles.metricValue}>2</Text>
                            <Text style={styles.metricLabel}>Pedidos fallados</Text>
                        </View>
                    </View>

                    <View style={styles.metricRow}>
                        <View style={styles.metricItem}>
                            <Ionicons name="time" size={32} color="blue" />
                            <Text style={styles.metricValue}>599 / 658 (91%)</Text>
                            <Text style={styles.metricLabel}>Puntualidad</Text>
                        </View>
                        <View style={styles.metricItem}>
                            <Ionicons name="stats-chart" size={32} color="purple" />
                            <Text style={styles.metricValue}>658 / 670 (98.2%)</Text>
                            <Text style={styles.metricLabel}>Eficacia de reparto</Text>
                        </View>
                    </View>

                    {/* Definición de Puntualidad */}
                    <View style={styles.definition}>
                        <Text style={styles.definitionText}>
                            Un pedido puntual es aquel que se entrega en el rango de hasta +30min del horario nominal
                            estimado cuando iniciaste el envío. Se mide solo en función de los pedidos entregados o
                            recogidos.
                        </Text>
                    </View>
                </View>


            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
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
        marginRight: 20, flex: 1
    },
    radioLabel: {
        marginLeft: 5,
    },
    dateRange: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    dateLabel: {
        marginRight: 5,
    },
    dateInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
    },
    typeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    typeButtonText: {
        marginLeft: 5,
    },
    metricRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    metricItem: {
        alignItems: 'center',
        flex: 1,
    },
    metricValue: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    metricLabel: {
        fontSize: 14,
        color: '#555',
    },
    definition: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    definitionText: {
        fontSize: 14,
    },
});

export default ReportesScreen;
