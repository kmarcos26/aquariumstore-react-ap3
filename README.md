# AQUARIUMSTORE - 

AQUARIUMSTORE es una aplicación web desarrollada con React para la presentación de una tienda virtual de peces, acuarios, alimentos, filtros, decoración y accesorios para el cuidado de acuarios.

El proyecto corresponde al AP3 del curso JavaScript Avanzado y aplica componentes funcionales, React Router DOM, Hooks, consumo de servicios REST mediante Fetch API, Tailwind CSS, JSON Server, GitHub y despliegue web.

## Objetivo del proyecto

Desarrollar una aplicación web modular y responsive que permita visualizar productos de una tienda de acuarios, consumir datos desde una API simulada con JSON Server y demostrar el uso de funcionalidades principales de React.

## Tecnologías utilizadas

- React
- React Router DOM
- JavaScript ES6+
- HTML5
- CSS3
- Tailwind CSS
- JSON Server
- Fetch API
- Vite
- Git y GitHub
- Netlify / Render para despliegue

## Funcionalidades principales

- Navegación entre páginas con React Router DOM.
- Navbar reutilizable.
- Footer reutilizable.
- Página de inicio con presentación de la tienda.
- Página Nosotros con información general del proyecto.
- Página Productos con catálogo dinámico.
- Filtro de productos por nombre y categoría.
- Cards reutilizables para mostrar productos.
- Modal de detalle de producto.
- Formulario de contacto funcional con validaciones básicas.
- Página 404 personalizada para rutas inexistentes.
- Consumo de productos desde JSON Server usando Fetch API.
- Respaldo de datos desde `public/db.json` para despliegue.
- Diseño responsive con Tailwind CSS.

## Estructura del proyecto

```txt
src/
├── assets/
│   └── hero.png
├── components/
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── Products.jsx
├── services/
│   └── productService.js
├── App.jsx
├── index.css
└── main.jsx
```

## Páginas implementadas

| Página | Ruta | Descripción |
|---|---|---|
| Inicio | `/` | Presentación principal de AQUARIUMSTORE. |
| Nosotros | `/nosotros` | Información general de la tienda y temática. |
| Productos | `/productos` | Catálogo dinámico consumido desde API. |
| Contacto | `/contacto` | Formulario funcional con validaciones. |
| 404 | `*` | Página personalizada para rutas inexistentes. |

## Implementación de React

### Componentes funcionales

Todas las vistas y componentes están desarrollados como componentes funcionales de React.

### Props

El componente `ProductCard.jsx` recibe cada producto mediante props:

```jsx
<ProductCard producto={producto} />
```

### useState

Se utiliza para manejar:

- Lista de productos.
- Búsqueda de productos.
- Categoría seleccionada.
- Estado de carga.
- Estado de error.
- Datos del formulario de contacto.
- Apertura y cierre del modal de detalle.

### useEffect

Se utiliza en la página `Products.jsx` para cargar los productos al iniciar el componente.

### map()

Se utiliza para renderizar dinámicamente:

- Listado de productos.
- Opciones de categorías.

### Renderizado condicional

Se utiliza para mostrar:

- Estado de carga.
- Mensajes de error.
- Mensaje cuando no hay productos encontrados.
- Modal de detalle del producto.
- Confirmación y errores del formulario.

### Manejo de eventos

Se aplica en:

- Filtros de búsqueda y categoría.
- Botón de limpiar filtros.
- Botón de ver detalle.
- Botón de cerrar detalle.
- Envío del formulario de contacto.

## Consumo REST con Fetch API

La lógica de consumo está separada en la carpeta `services`:

```txt
src/services/productService.js
```

El servicio consume la API con `fetch()` desde:

```js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/productos'
```

Esto permite trabajar con la API local de JSON Server y también con una API desplegada mediante variable de entorno.

## Base de datos simulada

El archivo `db.json` contiene la información de productos:

```txt
db.json
```


## Ejecución local

### 1. Instalar dependencias

```cmd
npm install
```

### 2. Ejecutar JSON Server

Abrir una terminal y ejecutar:

```cmd
npm run api
```

La API local estará disponible en:

```txt
http://localhost:3000/productos
```

### 3. Ejecutar React

Abrir otra terminal y ejecutar:

```cmd
npm run dev
```

La aplicación estará disponible en:

```txt
http://localhost:5173/
```

## Scripts disponibles

```cmd
npm run dev
npm run api
npm run build
npm run preview
npm run lint
```

## Despliegue

Frontend:

```txt
https://aquariumstore-react-ap3.netlify.app/
```

API JSON Server:

```txt
https://aquariumstore-react-ap3.onrender.com/productos
```


## Configuración para Netlify

El proyecto incluye:

```txt
public/_redirects
```

Con esta regla:

```txt
/* /index.html 200
```

Esto permite que las rutas de React Router DOM funcionen correctamente en el despliegue.

## Variable de entorno recomendada

En Netlify se puede configurar:

```txt
VITE_API_URL=https://aquariumstore-react-ap3.onrender.com/productos
```

## Integrantes

- Fernando Lagos
- Kevin Marcos
