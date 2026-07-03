const API_URL = 'http://localhost:3000/productos'

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