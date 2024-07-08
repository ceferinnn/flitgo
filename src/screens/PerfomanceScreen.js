import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // O el paquete de iconos que prefieras
import Container from '../components/containers/Container';

const PerformanceScreen = () => {
    const [calificaciones] = useState([
        { estrellas: 5, comentario: 'Muy bueno LO felicito!', fecha: '5/10/2024' },
        { estrellas: 5, comentario: 'De los mejores repartidores que hay', fecha: '4/10/2024' },
        { estrellas: 4, comentario: 'Le faltó un pedido, pero ni modo!', fecha: '3/10/2024' },
    ]);

    return (
        <Container>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingNumber}>4.9</Text>
                        <Icon name="star" size={24} color="#FFD700" style={styles.starIcon} />
                        <Text style={styles.ratingText}>Oro</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Fallas acumuladas</Text>
                    <View style={styles.fallasContainer}>
                        <Icon name="warning" size={24} color="#F44336" />
                        <Icon name="warning" size={24} color="#F44336" />
                        <Icon name="warning" size={24} color="#ccc" />
                    </View>
                    <Text style={styles.reactivacion}>Se reanudan el 17/08/2024</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.row}>
                        <Icon name="check-circle" size={24} color="#4CAF50" style={styles.sectionIcon} />
                        <Text style={styles.sectionTitle}>Pedidos entregados y recogidos</Text>
                    </View>
                    <Text style={styles.stat}>658</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.row}>
                        <Icon name="thumb-up" size={24} color="#007BFF" style={styles.sectionIcon} />
                        <Text style={styles.sectionTitle}>Eficacia de entregas</Text>
                    </View>
                    <Text style={styles.stat}>658/670 (98.2%)</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.row}>
                        <Icon name="handshake" size={24} color="#FF9800" style={styles.sectionIcon} />
                        <Text style={styles.sectionTitle}>Tasa de aceptación</Text>
                    </View>
                    <Text style={styles.stat}>82%</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Calificaciones</Text>
                    <ScrollView>
                        {calificaciones.map((calificacion, index) => (
                            <View key={index} style={styles.calificacionContainer}>
                                <Text style={styles.calificacionEstrellas}>{calificacion.estrellas}☆</Text>
                                <Text style={styles.calificacionComentario}>{calificacion.comentario}</Text>
                                <Text style={styles.calificacionFecha}>{calificacion.fecha}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        marginRight: 8,
    },
    ratingText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    starIcon: {
        marginRight: 5,
    },
    section: {
        marginBottom: 20,
    },
    row:{
        flexDirection:'row',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    fallasContainer: {
        flexDirection: 'row',
    },
    reactivacion: {
        marginTop: 5,
        color: '#999',
    },
    sectionIcon: {
        marginRight: 10,
      },
    stat: {
        fontSize: 16,
    },
    calificacionContainer: {
        backgroundColor: '#FAFAFA',
        padding: 15,
        borderRadius: 10,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        minWidth: 200,
        marginBottom: 8
    },
    calificacionEstrellas: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    calificacionComentario: {
        marginBottom: 5,
    },
    calificacionFecha: {
        fontSize: 12,
        color: '#999',
    },
});

export default PerformanceScreen;
