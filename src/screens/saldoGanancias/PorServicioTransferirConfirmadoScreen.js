import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/containers/Container';
import Confirmation from '../../components/Confirmation';

const PorServicioTransferirConfirmadoScreen = ({navigation}) => {

    return (
        <Container>
            <Confirmation
                title="Solicitud de pago generada"
                message="Se ha generado la transferencia n°00004 al monedero virtual de GRUPO PERU COLA S.A.C."
                buttonText="Regresar"
                onButtonPress={() => navigation.navigate("SaldoGanancias")}
            />
        </Container>
    );
};

const styles = StyleSheet.create({

});

export default PorServicioTransferirConfirmadoScreen;
