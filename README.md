### FINVERO TEST (BACKEND)

---

API/REST para un Ecommerce usando NodeJS, Typescript, Express, Prisma y SQL teniendo en cuenta las siguientes características.

Entidades mínimas:

- Shop

- User

- Shop Cart

- Product

---

### RUTAS

---

### ----RUTAS PRODUCTOS----

GET: /productos : muestra todos los productos, por ejemplo:

```
{
        "id": 2,
        "title": "Sandia",
        "description": "Fruta fresca de temporada",
        "price": "10.50",
        "created_at": "2022-02-03T06:19:36.000Z"
}
```

GET: /productos/:productId : trae todos los productos que sean igual al ID buscado.

POST: /productos : crea un producto, por ejemplo:

```
{
    "title": "Ciruela",
    "description": "Fruta fresca de temporada",
    "price": 11.50

}
```

PUT: /productos/:productId : actualiza todos los productos que sean igual al ID consultado.

DELETE: /productos/:productId : elimina un producto que sea igual al ID consultado.

---

### ----RUTAS USUARIOS----

GET: /users : muestra todos los usuarios, por ejemplo:

```
{
        "id": 1,
        "name": "Gloria",
        "surname": "Gómez",
        "age": 31
}
```

GET: /users/:userId : trae todos los usuarios que sean igual al ID buscado.

POST: /users : crea un usuarios, por ejemplo:

```
{
    "name": "Héctor",
    "surname": "Martínez",
    "age": 35

}
```

PUT: /users/:userId : actualiza todos los usuarios que sean igual al ID consultado.

DELETE: /users/:userId : elimina un usuario que sea igual al ID consultado.

---

### ----RUTAS SHOPS (Comercios)----

GET: /shop : muestra todos los comercios, por ejemplo:

```
{
        "id": 1,
        "name": "Supermercado La Montaña",
        "description": "Supermercado creado en 1970, ubicado en Monterrey, N.L. y ahora con distintas sedes en toda la República. Los mejores productos frescos de temporada.",
        "created_at": "2022-02-03T19:26:30.000Z"
}
```

GET: /shop/:shopId : trae todos los comercios que sean igual al ID buscado.

POST: /shop : crea un comercio, por ejemplo:

```
{
    "name": "Supermercado La Montaña 2",
    "description": "Supermercado creado en 1970S"

}
```

PUT: /shop/:shopId : actualiza todos los comercios que sean igual al ID consultado.:

DELETE: /shop/:shopId : elimina un comercio que sea igual al ID consultado.
