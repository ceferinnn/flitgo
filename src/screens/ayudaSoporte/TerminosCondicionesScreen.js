import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Container from '../../components/containers/Container'

const TerminosCondicionesScreen = ({ navigation }) => {
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Bienvenido a FlitGo</Text>
        <Text style={styles.subtitle}>
          Lee nuestros términos y condiciones y confirma que estás de acuerdo
          con todo lo señalado:
        </Text>

        <View style={styles.section}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.sectionText}>
            Para los usuarios, a partir de ahora "Emprendedores":
          </Text>
          <Text>xxxxxxxxxxxxxxxxxxxxxxxxx</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.sectionText}>
            Para los "Repartidores en auto":
          </Text>
          <Text>xxxxxxxxxxxxxxxxxxxxxxxxx</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.sectionText}>
            Para los "Repartidores en moto":
          </Text>
          <Text>xxxxxxxxxxxxxxxxxxxxxxxxx</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.sectionText}>Para los "Afiliados":</Text>
          <Text>xxxxxxxxxxxxxxxxxxxxxxxxx</Text>
        </View>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20
  },
  section: {
    marginBottom: 20
  },
  bulletPoint: {
    fontSize: 20,
    marginRight: 10
  },
  sectionText: {
    fontWeight: 'bold',
    marginBottom: 5
  }
})

export default TerminosCondicionesScreen
