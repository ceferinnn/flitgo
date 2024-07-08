import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/containers/Container';
import Confirmation from '../../components/Confirmation';

const PorServicioRetirarConfirmadoScreen = ({navigation}) => {

    return (
        <Container>
            <Confirmation
                title="Solicitud de pago generada"
                message="Se ha generado con éxito la solicitud de pago n°00004. Recuerde que nuestros días de pago son los Martes y Jueves (no feriados) y las solicitudes de depósito se hacen por lo menos con un día de anticipación."
                buttonText="Regresar"
                onButtonPress={() => navigation.navigate("SaldoGanancias")}
            />
        </Container>
    );
};

const styles = StyleSheet.create({

});

export default PorServicioRetirarConfirmadoScreen;
