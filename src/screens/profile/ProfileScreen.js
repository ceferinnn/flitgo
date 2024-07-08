import React, { useContext, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Hola</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  }
})

export default ProfileScreen
