const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// Permitir comunicación con frontend
app.use(cors());
app.use(express.json());

// Configuración de conexión
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Samy2829",
    database: "contactos_db"
});

// Conectar a MySQL
db.connect((err) => {
    if (err) {
        console.error("Error de conexión:", err);
    } else {
        console.log("Conectado a MySQL");
    }
});

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor conectado a MySQL");
});

// Obtener todos los productos
app.get("/productos", (req, res) => {

    const sql = "SELECT * FROM productos";

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error SQL:", err);
            return res.status(500).send("Error en el servidor");
        }

        res.json(result);
    });

});
// Guardar un nuevo producto
app.post("/productos", (req, res) => {

    const { nombre, descripcion, precio, categoria, stock, imagen } = req.body;

    console.log("Producto recibido:", req.body);

    if (!nombre || !descripcion || !precio || !categoria || !stock || !imagen) {
        return res.status(400).send("Datos incompletos");
    }

    const sql = `
        INSERT INTO productos
        (nombre, descripcion, precio, categoria, stock, imagen)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [nombre, descripcion, precio, categoria, stock, imagen],
        (err, result) => {
            if (err) {
                console.error("Error SQL:", err);
                return res.status(500).send("Error en el servidor");
            }

            console.log("Producto guardado:", result);
            res.send("Producto guardado correctamente");
        }
    );

});

// ✅ RUTA PARA GUARDAR DATOS
app.post("/guardar", (req, res) => {

    const { nombre, correo, mensaje, telefono } = req.body;

    console.log("Datos recibidos:", req.body);

    if (!nombre || !correo || !mensaje || !telefono) {
        return res.status(400).send("Datos incompletos");
    }

    const sql = "INSERT INTO contactos (nombre, correo, mensaje, telefono) VALUES (?, ?, ?, ?)";

    db.query(sql, [nombre, correo, mensaje, telefono], (err, result) => {
        if (err) {
            console.error("Error SQL:", err);
            return res.status(500).send("Error en servidor");
        }

        console.log("Registro insertado:", result);
        res.send("Datos guardados correctamente");
    });
});
// Eliminar producto
app.delete("/productos/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM productos WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error SQL:", err);
            return res.status(500).send("Error al eliminar producto");
        }

        res.send("Producto eliminado correctamente");
    });
});

// Actualizar producto
app.put("/productos/:id", (req, res) => {

    const id = req.params.id;

    const { nombre, descripcion, precio, categoria, stock, imagen } = req.body;

    const sql = `
        UPDATE productos
        SET nombre = ?,
            descripcion = ?,
            precio = ?,
            categoria = ?,
            stock = ?,
            imagen = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [nombre, descripcion, precio, categoria, stock, imagen, id],
        (err, result) => {
            if (err) {
                console.error("Error SQL:", err);
                return res.status(500).send("Error al actualizar producto");
            }

            res.send("Producto actualizado correctamente");
        }
    );

});
// Login de usuario
app.post("/login", (req, res) => {

    const { correo, password } = req.body;

    const sql = "SELECT * FROM usuarios WHERE correo = ? AND password = ?";

    db.query(sql, [correo, password], (err, result) => {

        if (err) {
            console.error("Error SQL:", err);
            return res.status(500).send("Error del servidor");
        }

        if (result.length > 0) {
            res.json({
                mensaje: "Login correcto",
                usuario: result[0]
            });
        } else {
            res.status(401).json({
                mensaje: "Correo o contraseña incorrectos"
            });
        }

    });

});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});
