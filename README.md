# Sistema de Registro y Control de Visitas Institucionales

## Descripción

El Sistema de Registro y Control de Visitas Institucionales es una aplicación web desarrollada para administrar el proceso de registro de visitantes dentro de una institución. El sistema permite gestionar usuarios, unidades administrativas, eventos, visitantes, invitaciones, control de ingreso y reportes de asistencia, incorporando diferentes perfiles de acceso según el rol del usuario.

El proyecto fue desarrollado como parte de la evaluación de la asignatura de Base de Datos y Desarrollo Web del Instituto Profesional Santo Tomás.

---

# Objetivo del Proyecto

Desarrollar una aplicación web que permita gestionar de forma eficiente el registro de visitas institucionales mediante una base de datos relacional normalizada, proporcionando seguridad, trazabilidad y reportes de asistencia.

---

# Tecnologías Utilizadas

## Backend

* Node.js
* Express.js
* Express Session

## Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (ES6)

## Base de Datos

* MySQL 8
* MySQL Workbench

---

# Arquitectura

Cliente (HTML + CSS + JavaScript)

↓

API REST (Node.js + Express)

↓

Base de Datos MySQL

---

# Funcionalidades

## Inicio de Sesión

* Autenticación de usuarios.
* Control de acceso por roles.
* Cierre de sesión.

## Gestión de Usuarios

* Crear usuarios.
* Listar usuarios.
* Asignar roles.
* Asociar usuarios a unidades administrativas.

## Gestión de Unidades

* Crear unidades administrativas.
* Consultar unidades.

## Gestión de Eventos

* Crear eventos.
* Editar eventos.
* Eliminar eventos.
* Asociar anfitrión principal.
* Asociar anfitriones secundarios.

## Gestión de Visitantes

* Registrar visitantes.
* Consultar visitantes.

## Gestión de Invitaciones

* Asociar visitantes a eventos.
* Consultar invitaciones.

## Control de Ingreso

* Mostrar invitados del día.
* Registrar asistencia.
* Cambiar estado de ingreso.

## Reportes

* Invitados del día.
* Asistentes.
* Ausentes.
* Reporte por evento.
* Detalle de asistencia.

---

# Roles del Sistema

## Administrador

Puede acceder a:

* Dashboard
* Usuarios
* Unidades Administrativas
* Eventos
* Visitantes
* Invitaciones
* Reportes

## Usuario (Funcionario)

Puede acceder a:

* Eventos
* Visitantes
* Invitaciones
* Reportes

## Guardia

Puede acceder únicamente a:

* Control de Ingreso

---

# Modelo de Base de Datos

La base de datos está normalizada hasta Tercera Forma Normal (3FN).

Tablas principales:

* unidad_administrativa
* usuario
* evento
* evento_anfitrion
* visitante
* invitacion
* ingreso_visitante

---

# Instalación

## 1. Clonar el proyecto

```bash
git clone https://github.com/usuario/RegistroVisitas.git
```

## 2. Instalar dependencias

```bash
npm install
```

## 3. Crear la Base de Datos

Ejecutar el archivo:

```
RegistroVisitas_Completo.sql
```

en MySQL Workbench.

## 4. Configurar variables de entorno

Crear el archivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=asistencia_san_joaquin
PORT=3000
```

## 5. Ejecutar el servidor

```bash
npm start
```

o

```bash
nodemon app.js
```

---

# Estructura del Proyecto

```
RegistroVisitas/

│

├── config/

├── controllers/

├── middlewares/

├── models/

├── public/

│   ├── css/

│   ├── js/

│   ├── dashboard.html

│   ├── eventos.html

│   ├── visitantes.html

│   ├── invitaciones.html

│   ├── guardia.html

│   ├── reportes.html

│   ├── usuarios.html

│   ├── unidades.html

│   └── login.html

│

├── routes/

├── app.js

├── package.json

└── README.md
```

---

# Principales Funcionalidades SQL

* Creación de Base de Datos.
* Relaciones mediante claves foráneas.
* Normalización en 3FN.
* Consultas INNER JOIN.
* Consultas LEFT JOIN.
* Reportes mediante GROUP BY.
* Restricciones de integridad.
* Índices.

---

# Características del Sistema

* Arquitectura Cliente – Servidor.
* API REST.
* Gestión por Roles.
* Persistencia en MySQL.
* Diseño Responsive.
* Seguridad mediante sesiones.
* Registro de asistencia en tiempo real.

---

# Autor

**Alejandro Andrés Rojas Rojas**

Instituto Profesional Santo Tomás

Carrera: Analista Programador

Año: 2026

---

# Licencia

Proyecto desarrollado con fines académicos para el Instituto Profesional Santo Tomás.
