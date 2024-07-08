// modeloPlacaValidations.js
import * as Yup from 'yup';

// Validación de dimensiones (largo, ancho, alto)
const dimensionValidation = Yup.number()
    .typeError('Debe ser un número')
    .required('Requerido')
    .min(0.1, 'Debe ser mayor a 0');

export const modeloPlacaValidationSchema = Yup.object().shape({
  long_useful_space: dimensionValidation,
  width_useful_space: dimensionValidation,
  height_useful_space: dimensionValidation
})
export const initialValues = {
  long_useful_space: '4.115',
  width_useful_space: '1.7',
  height_useful_space: '1.475'
}