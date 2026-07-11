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

export async function agregarProducto(producto) {
  try {
    const respuesta = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    })

    if (!respuesta.ok) {
      throw new Error('Error al agregar el producto')
    }

    const nuevoProducto = await respuesta.json()
    return nuevoProducto
  } catch (error) {
    console.error('Error al agregar producto:', error)
    return null
  }
}

export async function eliminarProducto(id) {
  try {
    const respuesta = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })

    if (!respuesta.ok) {
      throw new Error('Error al eliminar el producto')
    }

    return true
  } catch (error) {
    console.error('Error al eliminar producto:', error)
    return false
  }
}