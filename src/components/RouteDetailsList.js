import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importamos Ionicons

const RouteDetailsList = ({ routeDetails }) => {
    return (
        <View style={{ width: '100%' }}>
            {routeDetails.map((item, index) => (
                <View key={index} style={styles.item}>
                    <View style={styles.leftContainer}>
                        {index === 0 ? (
                            <Ionicons name="flag" size={24} color="#007AFF" />
                        ) : (
                            <Text style={styles.marker}>{index + 1}</Text> // Envuelve el índice en un Text
                        )}
                        <View style={styles.line} />
                    </View>
                    <View style={styles.centerContainer}>
                        <Text style={styles.address}>{item.address}</Text>
                        <Text style={styles.district}>{item.district}, {item.postalCode}</Text>
                        {item.apartment && <Text style={styles.apartment}>Dep {item.apartment}</Text>}
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row', // Alinea elementos horizontalmente
        padding: 10
    },
    leftContainer: {
        alignItems: 'center',
        marginRight: 10
    },
    centerContainer: {
        flex: 1, // Ocupa el espacio restante
    },
    rightContainer: {
        alignItems: 'flex-end', // Alinea a la derecha
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    marker: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    line: {
        width: 2,
        height: 20,
        backgroundColor: '#ccc',
        marginTop: 5,
    },
    address: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    district: {
        fontSize: 14,
    },
    apartment: {
        fontSize: 14,
        color: '#666',
    },
});

export default RouteDetailsList;
