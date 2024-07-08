import axios from 'axios';

const ApiService = () => {
  const api = axios.create({
    baseURL: 'https://1b6a23e8-b769-47f9-9b98-e7cbd6588d87.mock.pstmn.io', // Reemplaza con la URL base de tu API
    // Otras opciones de configuración, como headers, timeout, etc.
  });

  const postFormData = async (endpoint, values, selectedFiles = []) => {
    try {
      const formData = new FormData();

      // Agregar los valores del formulario al FormData si existen
      if (values) {
        for (const key in values) {
          formData.append(key, values[key]);
        }
      }

      // Agregar las fotos al FormData si existen
      if (selectedFiles.length > 0) {
        selectedFiles.forEach((file, index) => {
          formData.append(`fotos[${index}]`, {
            uri: file.uri,
            type: 'image/jpeg', // Tipo MIME para imágenes
            name: file.fileName || `foto_${index}.jpg`,
          });
        });
      }
      
      
      const response = await api.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      

      return response.data;
    } catch (error) {
      console.error('Error en la petición POST:', error);
      throw error;
    }
  };

  return { postFormData };
};

export default ApiService;
