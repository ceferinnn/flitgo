import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PedidoActivo from './inicio/PedidoActivo';
import BannerAlerta from './alertaNuevoEnvio/BannerAlerta';

const HomeScreen = ({ navigation }) => {
    const [pedidoActivo, setPedidoActivo] = useState(true);
    const [alertas, setAlertas] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setAlertas(prevAlertas => [
                ...prevAlertas,
                { id: Date.now(), mensaje: `Nuevo pedido de ${Math.random() > 0.5 ? 'HELENA SAC' : 'Otro negocio'}` },
            ]);
        }, 10000); // Simular una alerta cada 10 segundos

        return () => clearInterval(interval);
    }, []);

    const handleAlertaPress = (alerta) => {
        setAlertas(prevAlertas => prevAlertas.filter(a => a.id !== alerta.id));
        navigation.navigate('Alertas', { alerta });
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Repartidor Oro</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>4.9</Text>
                    <Icon name="star" size={20} color="#FFD700" />
                </View>
                <View style={styles.iconContainer}>
                    <Icon name="motorcycle" size={30} color="#333" />
                    <Text style={styles.placa}>ABC-123</Text>
                </View>
            </View>

            {pedidoActivo && <PedidoActivo />}

            <View style={styles.optionsContainer}>
                {/* Opciones principales */}
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Performance')}>
                    <Icon name="bar-chart" size={30} color="#007BFF" />
                    <Text style={styles.optionText}>Desempeño</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Icon name="map" size={30} color="#4CAF50" />
                    <Text style={styles.optionText}>Mapa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("RedAfiliados")}>
                    <Icon name="people" size={30} color="#FF9800" />
                    <Text style={styles.optionText}>Red de afiliados</Text>
                </TouchableOpacity>

                {/* Opciones secundarias */}
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("EnviosProgramados")}>
                    <Icon name="schedule" size={30} color="#9C27B0" />
                    <Text style={styles.optionText}>Envíos Programados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("Notificaciones")}>
                    <Icon name="notifications" size={30} color="#F44336" />
                    <Text style={styles.optionText}>Notificaciones</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("Reportes")}>
                    <Icon name="assignment" size={30} color="#607D8B" />
                    <Text style={styles.optionText}>Reportes</Text>
                </TouchableOpacity>
            </View>

            {alertas.map((alerta, index) => (
                <BannerAlerta key={alerta.id} alerta={alerta} alertas={alertas} setAlertas={setAlertas} onPress={() => handleAlertaPress(alerta)} />
            ))}

        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    rating: {
        fontSize: 18,
        marginRight: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    placa: {
        marginLeft: 10,
        fontSize: 16,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    option: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        width: '48%', // Dos opciones por fila
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2, // Para Android
    },
    optionText: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default HomeScreen;
