// validations.js (o vehiculoValidations.js)
import * as Yup from 'yup';


const valiteString = Yup.string().required('Elija un tipo de vehiculo')

export const continuarRegistroValidationSchema = Yup.object().shape({
  vehicle_type: valiteString,
  vehicle_type: valiteString,
  vehicle_model: valiteString,
  vehicle_brand: valiteString,
  year_manufacture_vehicle: valiteString,
  vehicle_color: valiteString,
  vehicle_plate: valiteString,
  license_number: valiteString,
  license_expiration_date: valiteString ,
  policy_soat_number: valiteString,
  soat_expiration_date: valiteString,
  partida_registral: valiteString,
  next_inspection_date: valiteString
})
