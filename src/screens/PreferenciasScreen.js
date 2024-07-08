import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Container from '../components/containers/Container';

const PreferenciasScreen = () => {
  const [notificacionesEnvioWA, setNotificacionesEnvioWA] = useState(true);
  const [notificacionesEnvioSMS, setNotificacionesEnvioSMS] = useState(false);
  const [notificacionesEnvioPush, setNotificacionesEnvioPush] = useState(true);
  const [notificacionesEnvioPopups, setNotificacionesEnvioPopups] = useState(false);
  const [notificacionesNovedadesWA, setNotificacionesNovedadesWA] = useState(false);
  const [notificacionesNovedadesSMS, setNotificacionesNovedadesSMS] = useState(true);
  const [notificacionesNovedadesPush, setNotificacionesNovedadesPush] = useState(true);
  const [notificacionesNovedadesPopups, setNotificacionesNovedadesPopups] = useState(false);
  const [usarWaze, setUsarWaze] = useState(true); // true para Waze, false para Google Maps
  const [sonidoNotificaciones, setSonidoNotificaciones] = useState(true);

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Notificaciones de envíos</Text>
        <View style={styles.option}>
          <View style={styles.optionTextContainer}>
            <Ionicons name="logo-whatsapp" size={20} color="#333" style={styles.optionIcon} />
            <Text>Whats App</Text>
          </View>
          <Switch value={notificacionesEnvioWA} onValueChange={setNotificacionesEnvioWA} />
        </View>
        <View style={styles.option}>
          <View style={styles.optionTextContainer}>
            <Icon name="sms" size={20} color="#333" style={styles.optionIcon} />
            <Text>SMS</Text>
          </View>
          <Switch value={notificacionesEnvioSMS} onValueChange={setNotificacionesEnvioSMS} />
        </View>
        <View style={styles.option}>
          <View style={styles.optionTextContainer}>
            <Icon name="notifications" size={20} color="#333" style={styles.optionIcon} />
            <Text>Notificaciones push</Text>
          </View>
          <Switch value={notificacionesEnvioPush} onValueChange={setNotificacionesEnvioPush} />
        </View>
        <View style={styles.option}>
          <View style={styles.optionTextContainer}>
            <Icon name="open-in-new" size={20} color="#333" style={styles.optionIcon} />
            <Text>Pop-ups</Text>
          </View>
          <Switch value={notificacionesEnvioPopups} onValueChange={setNotificacionesEnvioPopups} />
        </View>

        <Text style={styles.sectionTitle}>Notificaciones de novedades y otros</Text>
        {/* Repetir estructura similar para las opciones de novedades */}

        <Text style={styles.sectionTitle}>Maps o Waze</Text>
        <View style={styles.option}>
          <Text>Usar Waze</Text>
          <Switch value={usarWaze} onValueChange={setUsarWaze} />
        </View>

        <Text style={styles.sectionTitle}>Otros</Text>
        <View style={styles.option}>
          <View style={styles.optionTextContainer}>
            <Icon name="volume-up" size={20} color="#333" style={styles.optionIcon} />
            <Text>Sonido de notificaciones</Text>
          </View>
          <Switch value={sonidoNotificaciones} onValueChange={setSonidoNotificaciones} />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 20, // Espacio superior para separar secciones
      color: '#333', // Color de texto más oscuro
    },
    option: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
      padding: 10, // Padding interno para la opción
      backgroundColor: '#fff', // Fondo blanco
      borderRadius: 8, // Bordes redondeados
      shadowColor: '#000', // Sombra para efecto de elevación
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2, // Para Android
    },
    optionTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionIcon: {
      marginRight: 10,
    },
    optionText: {
      fontSize: 16,
    },
  });

export default PreferenciasScreen;
