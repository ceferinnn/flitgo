import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

const RouteDetailsButtonList = ({ routeDetails }) => {
    const navigation = useNavigation();
    return (
        <View style={{ width: '100%' }}>
            {routeDetails.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    <View style={styles.item}>
                        <View style={styles.leftContainer}>
                            {index === 0 ? (
                                <Ionicons name="flag" size={24} color="#007AFF" />
                            ) : (
                                <Text style={styles.marker}>{index + 1}</Text>
                            )}
                            <View style={styles.line} />
                        </View>
                        <View style={styles.centerContainer}>
                            <Text style={styles.address}>{item.address}</Text>
                            <Text style={styles.district}>{item.district}, {item.postalCode}</Text>
                            {item.apartment && <Text style={styles.apartment}>Dep {item.apartment}</Text>}
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.time}>N: {item.time}</Text>
                            <Text style={styles.time}>E: {item.time}</Text>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            title="Navegar"
                            iconName="navigate-outline"
                            onPress={() => navigation.navigate("Navegacion", { item })}
                            primary
                            small
                            style={{ flex: 1 }}
                        />
                        <Button
                            title="Llegué"
                            onPress={() => { /* Lógica para marcar llegada */ }}
                            white
                            iconName="checkmark-circle-outline"
                            iconColor="green"
                            style={[styles.button, { marginHorizontal: 5 }]}
                            small
                        />
                        <Button
                            title="Cargué"
                            onPress={() => { /* Lógica para marcar carga */ }}
                            white
                            iconName="cube-outline"
                            iconColor="#000"
                            style={styles.button}
                            small
                        />
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 10
    },
    leftContainer: {
        alignItems: 'center',
        marginRight: 10
    },
    centerContainer: {
        flex: 1,
    },
    rightContainer: {
        alignItems: 'flex-end',
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
    itemContainer: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    button: {
        flex: 1
    },
});

export default RouteDetailsButtonList;
