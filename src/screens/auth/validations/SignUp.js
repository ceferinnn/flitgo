// validations.js
import * as Yup from 'yup';

// Validación de email
export const emailValidation = Yup.string()
  .email('Ingrese un email válido')
  .required('El email es obligatorio');

// Validación de contraseña (mínimo 6 caracteres)
export const passwordValidation = Yup.string()
  .min(6, 'La contraseña debe tener al menos 6 caracteres')
  .required('La contraseña es obligatoria');

// Validación de confirmación de contraseña
export const confirmPasswordValidation = Yup.string()
  .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
  .required('Confirme su contraseña');

// Validación de nombre de usuario (alfanumérico y sin espacios)
export const usernameValidation = Yup.string()
  .matches(/^[a-zA-Z0-9]+$/, 'El nombre de usuario solo puede contener letras y números')
  .required('El nombre de usuario es obligatorio');

// Validación de número de documento (solo números)
export const numDocValidation = Yup.string()
  .matches(/^\d+$/, 'El número de documento solo puede contener números')
  .required('El número de documento es obligatorio');

// Validación de número de celular (solo números)
export const celularValidation = Yup.string()
  .matches(/^\d+$/, 'El número de celular solo puede contener números')
  .required('El número de celular es obligatorio');

export const signUpValidationSchema = Yup.object().shape({
  sponsorship: Yup.string(),
  nationality: Yup.string(),
  user_name: usernameValidation,
  document_type: Yup.string().required('El tipo de documento es obligatorio'),
  document_number: numDocValidation,
  birth_day: Yup.string(),
  first_name: Yup.string().required('Los nombres son obligatorios'),
  last_name: Yup.string().required('Los apellidos son obligatorios'),
  email: emailValidation,
  number: celularValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation
})

export const initialValues = {
  sponsorship: '',
  nationality: 'Peruana',
  user_name: 'cristhian31',
  document_type: 'dni',
  document_number: '12344594',
  birth_day: '',
  first_name: 'Juan',
  last_name: 'Pérez',
  email: 'correo61@gmail.com',
  number: '987654321',
  password: 'Jazz2017:v',
  confirmPassword: 'Jazz2017:v'
}