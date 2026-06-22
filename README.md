# TecnoHogar - Tienda Virtual

## Descripción del Proyecto

TecnoHogar es una tienda virtual enfocada en la venta de productos tecnológicos como teclados, mouse, audífonos, memorias USB y monitores.

Este proyecto fue desarrollado como evidencia final del programa Técnico en Programación de Software del SENA, integrando frontend, backend y base de datos.

---

## Tecnologías Utilizadas

### Frontend

* HTML5
* CSS3
* Bootstrap
* JavaScript

### Backend

* Node.js
* Express.js

### Base de Datos

* MySQL

---

## Funcionalidades Implementadas

* Navegación entre páginas
* Catálogo de productos
* Formulario de contacto
* CRUD completo de productos
* Login administrativo
* Conexión con base de datos MySQL

---

## Estructura del Proyecto

```bash
Taller_Full_Satck_2026/
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── img/
│   ├── index.html
│   ├── productos.html
│   ├── contacto.html
│   ├── ayuda.html
│   ├── login.html
│   └── admin-productos.html
│
├── backend/
│   └── server.js
│
└── package.json
```

---

## Base de Datos

Nombre de la base de datos:

```sql
contactos_db
```

Tablas principales:

* productos
* contactos
* usuarios

---

## Instalación

### 1. Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar MySQL

Crear la base de datos:

```sql
CREATE DATABASE contactos_db;
```

Importar o crear las tablas necesarias:

* productos
* contactos
* usuarios

---

## Ejecución del Proyecto

### Backend

Entrar a la carpeta backend:

```bash
cd backend
```

Ejecutar:

```bash
node server.js
```

Debe mostrar:

```bash
Servidor en http://localhost:3000
Conectado a MySQL
```

---

### Frontend

Abrir la carpeta frontend en Visual Studio Code y ejecutar con Live Server.

---

## Login Administrativo

Ejemplo de acceso:

Correo:

```text
admin@gmail.com
```

Contraseña:

```text
123456
```

---

## Autor

Juan Esteban

SENA - Técnico en Programación de Software

2026
