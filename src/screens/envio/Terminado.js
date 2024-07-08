import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Button from '../../components/Button'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TerminadoScreen = ({ navigation }) => {
  const resultadosLiquidacion = {
    resultados: {
      distanciaEnvioEsperada: 24.2,
      distanciaPerdidaPorFallo: -4.8,
      distanciaEnvioNeta: 19.4,
      distanciaRetorno: 6,
      distanciaTotal: 25.4,
      pedidosTotales: 5,
      pedidosEntregados: 4,
      pedidosNoEntregados: 0,
      pedidosFallados: 1,
      cumplimiento: '4/5   80%',
      pedidosEntregadosATiempo: 3,
      pedidosEntregadosFueraDeHora: 2,
      puntualidad: '60%'
    },
    liquidacion: {
      servicioRepartoEnvio: 28.56,
      servicioRepartoRetorno: 0.0,
      propina: 1.69,
      peajes: 4.24,
      total: 34.5,
      igv: 6.21,
      totalIncIgv: 40.71
    }
  }
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 23, marginRight: 10, textAlign: 'center' }}>
          ¡Felicidades! Has terminado el envío n°10000045. Se ha depositado a
          tus ganancias un saldo de S/ 45.43. A continuación los resultados del
          envío:
        </Text>
        <Ionicons name='checkmark-circle-outline' size={70} color='green' />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resultados</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Distancia de envío esperada:</Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.distanciaEnvioEsperada} Km
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Distancia perdida por fallo:</Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.distanciaPerdidaPorFallo} Km
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Distancia de envío neta:</Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.distanciaEnvioNeta} Km
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Distancia de retorno:</Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.distanciaRetorno} Km
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Distancia total:</Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.distanciaTotal} Km
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Pedidos totales:</Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.pedidosTotales}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Pedidos entregados:</Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.pedidosEntregados}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Pedidos no entregados:</Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.pedidosNoEntregados}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Pedidos fallados:</Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.pedidosFallados}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Cumplimiento:</Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.cumplimiento}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>
            Pedidos entregados a tiempo (+/- 10 min):
          </Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.pedidosEntregadosATiempo}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>
            Pedidos entregados fuera de hora:
          </Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.pedidosEntregadosFueraDeHora}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Puntualidad:</Text>
          <Text style={styles.detailValue}>
            {resultadosLiquidacion.resultados.puntualidad}
          </Text>
        </View>
      </View>

      {/* Liquidación */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Liquidación</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>SERVICIO DE REPARTO ENVÍO:</Text>
          <Text style={styles.detailValue}>
            S/{' '}
            {resultadosLiquidacion.liquidacion.servicioRepartoEnvio.toFixed(2)}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>SERVICIO DE REPARTO RETORNO:</Text>
          <Text style={styles.detailValue}>
            S/{' '}
            {resultadosLiquidacion.liquidacion.servicioRepartoRetorno.toFixed(
              2
            )}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>PROPINA:</Text>
          <Text style={styles.detailValue}>
            S/ {resultadosLiquidacion.liquidacion.propina.toFixed(2)}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>PEAJES:</Text>
          <Text style={styles.detailValue}>
            S/ {resultadosLiquidacion.liquidacion.peajes.toFixed(2)}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>TOTAL:</Text>
          <Text style={styles.detailValue}>
            S/ {resultadosLiquidacion.liquidacion.total.toFixed(2)}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>IGV:</Text>
          <Text style={styles.detailValue}>
            S/ {resultadosLiquidacion.liquidacion.igv.toFixed(2)}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>TOTAL INC IGV:</Text>
          <Text style={styles.detailValue}>
            S/ {resultadosLiquidacion.liquidacion.totalIncIgv.toFixed(2)}
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: 30 }}>
        <Button
          title='Listo'
          primary
          onPress={() => navigation.navigate('Envio')}></Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20
  },
  container: {
    padding: 20
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5
  },
  section: {
    width: '100%',
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  detailLabel: {
    fontSize: 16
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
export default TerminadoScreen
