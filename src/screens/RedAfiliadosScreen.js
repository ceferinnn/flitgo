import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Container from '../components/containers/Container';


const RedAfiliadosScreen = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date !== undefined) {
      setSelectedDate(date);
    }
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.section, { flexDirection: 'row',justifyContent:'space-between',alignItems:'center' }]}>
          <Text style={styles.sectionTitle}>Ganancia total</Text>
          <View style={{flexDirection:'row'}}>
            <Ionicons name="cash-outline" size={32} color="green" />
            <Text style={{fontSize:20,marginLeft:10}}>S/ 663.92</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Filtro de reporte</Text>
          <View style={styles.dateRange}>
            <Text style={styles.dateLabel}>Del:</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{flex:1,marginRight:10}}>
              <Text style={styles.dateInput}>{selectedDate.toLocaleDateString()}</Text>
            </TouchableOpacity>

            <Text style={styles.dateLabel}>Al:</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{flex:1}}>
              <Text style={styles.dateInput}>{selectedDate.toLocaleDateString()}</Text>
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>


      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateRange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent:'space-between'
  },
  dateLabel: {
    marginRight: 5,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
  },
});

export default RedAfiliadosScreen;
