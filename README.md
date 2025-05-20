Para saber la ip pública de donde se está ejecutando en codespaces:
curl https://ipinfo.io/ip


TP-PharmaYap - Backend (Avance CRUD Inicial)

Este repositorio contiene el backend del sistema de farmacia TP-PharmaYap, desarrollado con Node.js, Express y MongoDB. En esta primera etapa se ha implementado la estructura básica del servidor y el CRUD (Create, Read, Update, Delete) para las principales entidades del sistema.

Avances incluidos en esta versión:

Conexión a base de datos MongoDB mediante Mongoose.

Estructura modular con carpetas para modelos, controladores y rutas.

CRUD completo funcional para las siguientes entidades:

Usuario

Proveedor

Producto

ProveedorProducto

Categoria

Almacen

Carrito

Pedido

Inventario

Reclamo

Uso de populate para referencias entre colecciones (relaciones lógicas).

Validaciones básicas y manejo de errores en controladores.

Pruebas manuales realizadas con datos realistas a través de herramientas como Thunder Client o Postman.

Separación del archivo de configuración de la base de datos.

Consideraciones:

Las relaciones entre colecciones (por ejemplo, productos ofrecidos por proveedores) se modelan mediante referencias de Mongoose, ya que MongoDB no maneja claves foráneas reales.

En esta etapa no se han implementado autenticación, autorizaciones ni middlewares de validación.

Se priorizó la funcionalidad CRUD como base para continuar con la lógica de negocio y casos de uso específicos en siguientes etapas.

Pasos siguientes sugeridos:

Implementar validaciones más robustas (tanto del lado backend como frontend).

Añadir autenticación JWT y autorización por roles.

Mejorar los mensajes de respuesta y el manejo centralizado de errores.

Desarrollar pruebas automáticas (unitarias o de integración).

Iniciar integración con el frontend de la aplicación.

Instalación y ejecución del proyecto (desde Codespaces):

Clona este repositorio en tu Codespace de GitHub.

Instala las dependencias:
npm install

Configura las variables de entorno (puedes usar .env si decides integrarlo en el futuro, pero de momento puedes modificar directamente en config/db.js para definir la URI de MongoDB Atlas).
Ejemplo de cadena de conexión MongoDB Atlas:

mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombre_base>?retryWrites=true&w=majority

Inicia el servidor
npm run dev


Hacer público el puerto para pruebas desde Postman (Codespaces):

Codespaces de GitHub permite exponer puertos para poder acceder a ellos desde fuera (por ejemplo, desde Postman). Sigue estos pasos:

Ve a la pestaña Ports dentro de Codespaces.

Ubica el puerto 3000.

Haz clic en el icono de la "globito" (🌐) al lado del puerto y selecciona la opción Make Public.

Obtendrás una URL del tipo:

https://3000-<tucodespace-id>.githubpreview.dev


Usa esta URL en Postman para hacer peticiones. Por ejemplo:

GET https://3000-<tucodespace-id>.githubpreview.dev/api/proveedores

Configuración MongoDB Atlas:

Crea una cuenta en https://www.mongodb.com/cloud/atlas

Crea un nuevo Cluster gratuito (M0).

Crea un usuario de base de datos con contraseña.

Permite acceso desde todas las IPs (0.0.0.0/0) temporalmente para pruebas.

Copia la URI de conexión y reemplaza en db.js o como variable de entorno.

Estructura general del proyecto:

/models: Esquemas de Mongoose para cada entidad (Usuario, Producto, Proveedor, etc.)

/controllers: Lógica de negocio y controladores para los endpoints

/routes: Definición de rutas para cada recurso

/config/db.js: Conexión a la base de datos MongoDB Atlas

/src/index.js: Punto de entrada principal del servidor Express

CRUDs implementados (completos):

Usuario

Proveedor

Producto

ProveedorProducto

Categoria

Almacen

Carrito

Pedido

Inventario

Reclamo

Notas adicionales:

Las relaciones entre colecciones se modelan con referencias (ObjectId y populate) ya que MongoDB es NoSQL y no tiene claves foráneas nativas.

No se ha implementado aún autenticación JWT ni protección de rutas.

Esta estructura es base para construir la lógica de negocio en las siguientes etapas del desarrollo.

