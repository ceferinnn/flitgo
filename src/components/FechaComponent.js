import { useState } from 'react'
import { useFormikContext } from 'formik'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'


import TextInputField from './forms/TextInputField'

export const FechaComponent = ({
  showDatePicker,
  setShowDatePicker,
  name,
  label
}) => {
  const [dateSelect, setDateSelect] = useState(null)
  const { setFieldValue } = useFormikContext()
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios') // Ocultar en iOS después de seleccionar
    if (selectedDate !== undefined) {
      setFieldValue(name, selectedDate)
      setDateSelect(selectedDate.toISOString())
    }
  }

  const formatDate = date => {
    if (!date) return ''
    const formattedDate = new Date(date).toLocaleDateString('es-ES', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit'
    })

    return formattedDate
  }

  return (
    <View style={[styles.input, { flex: 1 }]}>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInputField
          name={name}
          label={label}
          editable={false}
          value={formatDate(dateSelect)}
          placeholder='Seleccionar fecha'
          style={{ color: 'black' }}
        />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID='dateTimePicker'
          value={dateSelect ? new Date(dateSelect) : new Date()}
          mode='date'
          is24Hour={true}
          display='default'
          onChange={handleDateChange}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginRight: 5
  }
})
