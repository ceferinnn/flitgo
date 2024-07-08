import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/containers/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SaldoGananciasScreen = ({navigation}) => {

    return (
        <Container>
            <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("PorServicio")}>
                <Text style={styles.title}>Por servicio de repartos</Text>
                <View style={styles.row}>
                    <Text style={styles.price}>S/830.00</Text>
                    <Ionicons name="cube-outline" size={32} color={'black'} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("PorRed")}>
                <Text style={styles.title}>Por red de afiliados</Text>
                <View style={styles.row}>
                    <Text style={styles.price}>S/180.00</Text>
                    <Ionicons name="people-outline" size={32} color={'black'} />
                </View>
            </TouchableOpacity>
        </Container>
    );
};

const styles = StyleSheet.create({
    item: {
        width: '100%',
        padding: 20, // Agregamos padding para mejor visualización
        borderBottomWidth: 1, // Separador entre items
        borderBottomColor: '#ccc',
        backgroundColor: '#fff', // Fondo blanco para los items
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold', // Hacemos el título más visible
        marginBottom: 10, // Espacio entre el título y la fila de precio/icono
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center', // Alineamos el precio y el icono verticalmente
        justifyContent: 'space-between', // Separamos el precio y el icono
      },
      price: {
        color: '#26B9EA', // Usamos el color correcto
        fontSize: 24, // Tamaño de fuente más grande para el precio
        fontWeight: 'bold',
      },
});

export default SaldoGananciasScreen;
