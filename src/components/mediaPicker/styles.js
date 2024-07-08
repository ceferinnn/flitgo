import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#26B9EA',
  secondary: '#F9B028',
  error: 'red',
};

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode:'contain'
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  progressText: {
    marginLeft: 10,
  },
  errorText: {
    color: colors.error,
    marginTop: 10,
  },
  fileSelectedText: {
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  pdfIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
  },
  pdfFileName: {
    marginTop: 10,
    fontSize: 12,
  },
});
