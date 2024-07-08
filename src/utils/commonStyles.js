// commonStyles.js

import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 20
  },
  title: {
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 21.78,
    color: '#3E0E4D',
    marginTop: 20,
    marginBottom: 10,
  },
  title2: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: '#262626',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#F7F7F7',
    borderColor: '#8D8D8D', paddingHorizontal:10, gap: 10, borderRadius: 10, height: 36,alignItems:'center'
  },
  textarea: {
    borderWidth: 1,
    minHeight:120,textAlignVertical: 'top',
    backgroundColor: '#F7F7F7',
    borderColor: '#8D8D8D', paddingHorizontal:10, gap: 10, borderRadius: 10
  },
  formControl:{
    marginBottom:15
  },
  boton1: {
    borderRadius: 200,
    padding: 16,
    gap: 10,
    height: 52,
    backgroundColor: '#FFF',
  },
  boton1Text: {
    color: '#5663B1',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center'
  },
  card: {
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  footer: {
    paddingVertical: 30,
    backgroundColor: '#F7F7F7',
  },
  errorText:{
      color:'#F00',
      marginBottom:10,
  }
  // Otros estilos comunes...
});