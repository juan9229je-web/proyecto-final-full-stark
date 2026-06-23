# Proyecto: Tienda Virtual Personalizada - TecnoHogar

---

# 1. Nombre de la tienda virtual

TecnoHogar

---

# 2. Integrantes del grupo

* Juan Esteban Toro Restrepo
* Ficha 3336014
* Programación de software

---

# 3. Descripción de la tienda

TecnoHogar es una tienda virtual enfocada en la venta de productos tecnológicos como teclados, mouse, audífonos, monitores, memorias USB y otros accesorios tecnológicos.

La tienda fue diseñada para ofrecer una experiencia sencilla y organizada en la visualización y administración de productos tecnológicos.

---

# 4. Objetivo del proyecto

Desarrollar una tienda virtual funcional que integre frontend, backend y base de datos.

El propósito principal es aplicar los conocimientos adquiridos durante la formación en programación de software, integrando todas las capas de desarrollo en un sistema funcional.

---

# 5. Tecnologías utilizadas

## Frontend

* HTML5
* CSS3
* Bootstrap
* JavaScript

## Backend

* Node.js
* Express.js

## Base de Datos

* MySQL

---

# 6. Estructura del proyecto

```bash
proyecto final full stark
│
├── frontend
│   ├── css
│   ├── js
│   ├── img
│   ├── index.html
│   ├── productos.html
│   ├── ayuda.html
│   ├── contacto.html
│   ├── login.html
│   └── admin-productos.html
│
├── backend
│   └── server.js
```

---

# 7. Instrucciones de instalación y ejecución

## 1. Instalar dependencias

Ejecutar en terminal:

```bash
npm install
```

## 2. Configurar base de datos

Crear la base de datos en MySQL:

```sql
contactos_db
```

Crear las tablas:

* productos
* contactos
* usuarios

## 3. Ejecutar backend

Ingresar a la carpeta backend y ejecutar:

```bash
node server.js
```

El servidor correrá en:

```text
http://localhost:3000
```

## 4. Ejecutar frontend

Abrir los archivos del frontend usando Live Server o navegador.

---

# 8. Funcionalidades implementadas

* Navegación entre páginas
* Catálogo de productos
* CRUD de productos
* Formulario de contacto
* Login administrativo
* Protección del panel administrativo

---

# 9. Flujo de información

El flujo de información del sistema funciona de la siguiente manera:

1. El usuario interactúa con el frontend.
2. JavaScript captura la información ingresada.
3. Los datos se envían al backend mediante fetch.
4. El backend procesa la solicitud con Node.js y Express.
5. El backend se conecta con MySQL.
6. La base de datos responde con la información solicitada.
7. La respuesta regresa al frontend y se muestra al usuario.

Flujo resumido:

Frontend → Backend → Base de Datos → Backend → Frontend

---

# 10. Pruebas realizadas

Durante el desarrollo se realizaron las siguientes pruebas:

* Prueba de navegación entre páginas
* Prueba de conexión frontend-backend
* Prueba de conexión backend-MySQL
* Prueba de catálogo de productos
* Prueba CRUD de productos
* Prueba de login correcto
* Prueba de login incorrecto
* Prueba de acceso al panel administrativo

---

# 11. Enlace del video de sustentación

https://www.youtube.com/watch?v=E9m8ijIqBXM
