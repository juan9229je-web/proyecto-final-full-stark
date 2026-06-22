console.log("productos.js cargado correctamente");
let productoEditando = null;

// 1. CARGAR PRODUCTOS EN EL CATÁLOGO PÚBLICO (Con Stock incluido)
fetch("http://localhost:3000/productos")
    .then(response => response.json())
    .then(data => {
        console.log("Productos recibidos:", data);
        const contenedor = document.getElementById("lista-productos");

        if (contenedor) {
            contenedor.innerHTML = ""; // Limpiamos para evitar duplicados

            data.forEach(producto => {
                contenedor.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 shadow-sm">
                            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height: 200px; object-fit: contain; padding: 10px;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title fw-bold mb-3">${producto.nombre}</h5>
                                
                                <div class="mt-auto">
                                    <p class="mb-1"><strong>Precio:</strong> <span class="text-success fw-bold">$${producto.precio}</span></p>
                                    <p class="mb-1"><strong>Categoría:</strong> ${producto.categoria}</p>
                                    <p class="mb-3"><strong>Disponibles (Stock):</strong> <span class="badge bg-secondary">${producto.stock} uds</span></p>
                                </div>
                                <button class="btn btn-primary btn-sm w-100"
                                        onclick='verDetalle(${JSON.stringify(producto)})'>
                                    Ver detalle
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    })
    .catch(error => {
        console.error("Error al cargar catálogo:", error);
    });

// 2. FORMULARIO PARA AGREGAR O EDITAR PRODUCTOS
const formulario = document.getElementById("form-producto");

if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const producto = {
            nombre: document.getElementById("nombre").value,
            descripcion: document.getElementById("descripcion").value,
            precio: document.getElementById("precio").value,
            categoria: document.getElementById("categoria").value,
            stock: document.getElementById("stock").value,
            imagen: document.getElementById("imagen").value
        };

        console.log("Producto a enviar:", producto);

        const url = productoEditando
            ? `http://localhost:3000/productos/${productoEditando}`
            : "http://localhost:3000/productos";

        const metodo = productoEditando ? "PUT" : "POST";

        fetch(url, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            formulario.reset();
            productoEditando = null;
            location.reload();
        })
        .catch(error => {
            console.error("Error al guardar:", error);
        });
    });
}

// 3. MOSTRAR PRODUCTOS EN LA PÁGINA DE ADMINISTRACIÓN
const listaAdmin = document.getElementById("lista-admin-productos");

if (listaAdmin) {
    fetch("http://localhost:3000/productos")
        .then(response => response.json())
        .then(data => {
            listaAdmin.innerHTML = ""; // Limpiamos la lista de administración
            data.forEach(producto => {
                listaAdmin.innerHTML += `
                    <div class="col-md-4 mb-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5>${producto.nombre}</h5>
                                <p><strong>Categoría:</strong> ${producto.categoria}</p>
                                <p><strong>Precio:</strong> $${producto.precio}</p>

                                <button class="btn btn-warning btn-sm"
                                        onclick='editarProducto(${JSON.stringify(producto)})'>
                                    Editar
                                </button>

                                <button class="btn btn-danger btn-sm"
                                        onclick="eliminarProducto(${producto.id})">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error("Error en panel de admin:", error);
        });
}

// 4. FUNCIÓN PARA ELIMINAR UN PRODUCTO
function eliminarProducto(id) {
    if (confirm("¿Está seguro de eliminar este producto?")) {
        fetch(`http://localhost:3000/productos/${id}`, {
            method: "DELETE"
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            location.reload();
        })
        .catch(error => {
            console.error("Error al eliminar:", error);
        });
    }
}

// 5. FUNCIÓN PARA CARGAR UN PRODUCTO EN EL FORMULARIO DE EDICIÓN
function editarProducto(producto) {
    productoEditando = producto.id;

    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("stock").value = producto.stock;
    document.getElementById("imagen").value = producto.imagen;
}

// 6. FUNCIÓN PARA MOSTRAR LOS DETALLES EN EL MODAL FLOTANTE (Con Stock incluido)
function verDetalle(producto) {
    document.getElementById("modalProductoNombre").innerText = producto.nombre;
    document.getElementById("modalProductoImagen").src = producto.imagen;
    document.getElementById("modalProductoImagen").alt = producto.nombre;
    document.getElementById("modalProductoDescripcion").innerText = producto.descripcion;
    document.getElementById("modalProductoPrecio").innerText = producto.precio;
    document.getElementById("modalProductoCategoria").innerText = producto.categoria;
    
    // Si tu modal en HTML tiene espacio para el stock lo pintamos, si no, con el del catálogo ya cumples.
    if(document.getElementById("modalProductoStock")) {
        document.getElementById("modalProductoStock").innerText = producto.stock;
    }

    const miModal = new bootstrap.Modal(document.getElementById('detalleModal'));
    miModal.show();
}
