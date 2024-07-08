import React from 'react';
import { StyleSheet } from 'react-native';
import Container from '../components/containers/Container';
import Confirmation from '../components/Confirmation';

const FelicitacionesPorRegistroScreen = ({navigation}) => {

    return (
        <Container>
            <Confirmation
                title="¡Felicitaciones JCPANIZO, se ha registrado con éxito como repartidor de FlitGo!"
                message="Esperamos que disfrutes de ésta experiencia. Recuerda que tú eres un repartidor independiente y nosotros te ayudaremos a conseguir la mayor cantidad de clientes posibles. Tu éxito es nuestro éxito."
                buttonText="Continuar"
                onButtonPress={() => navigation.navigate("Home")}
            />
        </Container>
    );
};

export default FelicitacionesPorRegistroScreen;
