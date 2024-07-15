import { StyleSheet, Text, View } from 'react-native'
import { CapacitacionDocumento } from './CapacitacionDocumento'

const CapacitacionComponent = ({ videos }) => {
  const documento = [...videos].find(
    video => video.file.content_type === 'file'
  )

  const fullVideos = [...videos].filter(
    video => video.file.content_type === 'video'
  )

  return (
    <>
      {videos.length === 0 ? (
        <Text>No hay Videos</Text>
      ) : (
        <View style={styles.containerVides}>
          <View style={styles.containerFullVideos}>
            <Text style={styles.manualText}>Descargue el manual</Text>

            <CapacitacionDocumento documento={documento} />
          </View>

          <View style={styles.containerFullVideos}>
            <Text style={styles.textComunicado}>
              Reproduzca el video hasta el final para poder completar la
              capacitacion. Es necesario para rendir la evaluacion final
            </Text>

            {fullVideos.map(video => (
              <View key={video.id}>
                <Text>{video.title}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  containerVides: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 15
  },
  textComunicado: {
    fontSize: 15,
    fontWeight: '700'
  },
  containerFullVideos: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  },
  manualText: {
    fontWeight: '700',
    fontSize: 16
  }
})

export default CapacitacionComponent
