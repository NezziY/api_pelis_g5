# Proyecto de Reviews de Películas y Series

Este proyecto consiste en una página web dedicada a ofrecer reseñas y comentarios sobre películas y series. Utiliza una base de datos MySQL para almacenar información sobre usuarios, películas, series y comentarios, estableciendo relaciones uno a muchos entre estas entidades.

## Tecnologías Utilizadas

- **Frontend**: React.js
- **Backend**: Node.js con Express
- **Base de Datos**: MySQL
- **ORM**: Sequelize

## Estructura de la Base de Datos

El esquema de la base de datos incluye las siguientes tablas y relaciones:

- **Usuarios**: Almacena información de los usuarios registrados.
- **Películas**: Contiene datos de cada película, como título, descripción, año, etc.
- **Series**: Similar a la tabla de películas pero para series.
- **Comentarios**: Registra los comentarios de los usuarios sobre películas y series, con referencias a la entidad correspondiente (`movie_id` o `series_id`).

## Funcionalidades Principales

1. **CRUD de Usuarios**:
   - Creación, lectura, actualización y eliminación de usuarios.

2. **CRUD de Comentarios**:
   - Permite a los usuarios agregar, editar y eliminar comentarios sobre películas y series.

3. **Integración Frontend-Backend**:
   - El frontend está integrado con el backend mediante peticiones API RESTful que manejan las operaciones CRUD mencionadas.

## Configuración del Proyecto

Para configurar y ejecutar el proyecto localmente, sigue estos pasos:

1. **Clonar el Repositorio**:
git clone https://github.com/NezziY/api_pelis_g5.git
cd nombre-del-proyecto


2. **Instalar Dependencias**:

npm install


3. **Configurar la Base de Datos**:
- Asegúrate de tener MySQL instalado y configurado.
- Crea una base de datos y ajusta la configuración de conexión en el archivo de configuración (`config/database.js`).

4. **Ejecutar el Servidor Backend**:

npm start


Claro, aquí tienes el README en formato Markdown:

markdown
Copiar código
# Proyecto de Reviews de Películas y Series

Este proyecto consiste en una página web dedicada a ofrecer reseñas y comentarios sobre películas y series. Utiliza una base de datos MySQL para almacenar información sobre usuarios, películas, series y comentarios, estableciendo relaciones uno a muchos entre estas entidades.

## Tecnologías Utilizadas

- **Frontend**: React.js
- **Backend**: Node.js con Express
- **Base de Datos**: MySQL
- **ORM**: Sequelize

## Estructura de la Base de Datos

El esquema de la base de datos incluye las siguientes tablas y relaciones:

- **Usuarios**: Almacena información de los usuarios registrados.
- **Películas**: Contiene datos de cada película, como título, descripción, año, etc.
- **Series**: Similar a la tabla de películas pero para series.
- **Comentarios**: Registra los comentarios de los usuarios sobre películas y series, con referencias a la entidad correspondiente (`movie_id` o `series_id`).

## Funcionalidades Principales

1. **CRUD de Usuarios**:
   - Creación, lectura, actualización y eliminación de usuarios.

2. **CRUD de Comentarios**:
   - Permite a los usuarios agregar, editar y eliminar comentarios sobre películas y series.

3. **Integración Frontend-Backend**:
   - El frontend está integrado con el backend mediante peticiones API RESTful que manejan las operaciones CRUD mencionadas.

## Configuración del Proyecto

Para configurar y ejecutar el proyecto localmente, sigue estos pasos:

1. **Clonar el Repositorio**:
git clone <url-del-repositorio>
cd nombre-del-proyecto

markdown
Copiar código

2. **Instalar Dependencias**:
npm install

markdown
Copiar código

3. **Configurar la Base de Datos**:
- Asegúrate de tener MySQL instalado y configurado.
- Crea una base de datos y ajusta la configuración de conexión en el archivo de configuración (`config/database.js`).

4. **Ejecutar el Servidor Backend**:
npm start

5. **Ejecutar el Cliente Frontend**:
cd client
npm start


## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, asegúrate de crear un *fork* y enviar *pull requests*.

## Contacto

Para cualquier consulta, puedes contactar al equipo de desarrollo:

- Diego Barros: [dienqn84@gmail.com](mailto:dienqn84@gmail.com)
- Ezequiel Seminara: [eze.seminara@gmail.com](mailto:eze.seminara@gmail.com)
- B. Vanessa Sánchez P.: [bvanesanchezp@gmail.com](mailto:bvanesanchezp@gmail.com)
