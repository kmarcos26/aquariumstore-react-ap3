const API_URL = 'https://aquariumstore-react-ap3.onrender.com/productos'

export async function obtenerProductos() {
  try {
    const respuesta = await fetch(API_URL)

    if (!respuesta.ok) {
      throw new Error('Error al obtener los productos')
    }

    const productos = await respuesta.json()
    return productos
  } catch (error) {
    console.error('Error en productService:', error)
    return []
  }
}