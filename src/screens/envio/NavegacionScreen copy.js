// MapScreen.js
import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
  Text
} from 'react-native'
import MapView, { Polyline, Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'

const GOOGLE_MAPS_APIKEY = 'AIzaSyDuPu45MLQ87px45mLn8wwf0K3_u0EvmbQ'

const MapScreen = ({ route }) => {
  const { coordinates } = route.params // Coordenadas de destino
  const [currentPosition, setCurrentPosition] = useState(null)
  const [routeCoordinates, setRouteCoordinates] = useState([])
  const [mapRegion, setMapRegion] = useState(null)

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          )
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert('Permiso de ubicación denegado')
            return
          }
        } catch (err) {
          console.warn(err)
          Alert.alert('Error solicitando permiso de ubicación')
        }
      }
      Geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords
          console.log('Ubicación actual:', { latitude, longitude })
          setCurrentPosition({ latitude, longitude })
          setMapRegion({
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          })
        },
        error => {
          console.log(error)
          Alert.alert('Error obteniendo la ubicación')
        },
        { enableHighAccuracy: true, distanceFilter: 10 }
      )
    }

    requestLocationPermission()
  }, [])

  useEffect(() => {
    if (currentPosition) {
      fetchRoute()
    }
  }, [currentPosition])

  const fetchRoute = async () => {
    try {
      const origin = `${currentPosition.latitude},${currentPosition.longitude}`
      const destination = `${coordinates.latitude},${coordinates.longitude}`
      console.log('Fetching route from:', origin, 'to:', destination)

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${GOOGLE_MAPS_APIKEY}`
      )

      console.log('Google Directions API response:', response.data)

      if (response.data.routes && response.data.routes.length > 0) {
        const points = decode(response.data.routes[0].overview_polyline.points)
        console.log('Route points:', points)
        setRouteCoordinates(points)
      } else {
        console.error('No routes found')
        Alert.alert('No se encontraron rutas')
      }
    } catch (error) {
      console.error('Error fetching route:', error)
      Alert.alert('Error obteniendo la ruta de navegación')
    }
  }

  const decode = (t, e) => {
    let points = []
    let index = 0,
      len = t.length
    let lat = 0,
      lng = 0

    while (index < len) {
      let b,
        shift = 0,
        result = 0
      do {
        b = t.charCodeAt(index++) - 63
        result |= (b & 0x1f) << shift
        shift += 5
      } while (b >= 0x20)
      let dlat = result & 1 ? ~(result >> 1) : result >> 1
      lat += dlat

      shift = 0
      result = 0
      do {
        b = t.charCodeAt(index++) - 63
        result |= (b & 0x1f) << shift
        shift += 5
      } while (b >= 0x20)
      let dlng = result & 1 ? ~(result >> 1) : result >> 1
      lng += dlng

      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 })
    }

    return points
  }

  return (
    <View style={styles.container}>
      {mapRegion ? (
        <MapView
          style={styles.map}
          region={mapRegion}
          showsUserLocation={true}
          followsUserLocation={true}>
          {routeCoordinates.length > 0 && (
            <Polyline
              coordinates={routeCoordinates}
              strokeWidth={5}
              strokeColor='blue'
            />
          )}
          {currentPosition && (
            <Marker coordinate={currentPosition} title='Tu ubicación' />
          )}
          <Marker coordinate={coordinates} title='Destino' />
        </MapView>
      ) : (
        <View style={styles.loading}>
          <Text>Cargando mapa...</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MapScreen
