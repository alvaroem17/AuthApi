# AUTH API
## Esta API tiene 4 endpoints:

BaseUrl:
```https://authapi-i1aj.onrender.com/api```

### POST

- login
- signup
  
### GET

- all
- one

### Endpoints POST

#### login

- Inicia sesión en la API.
- Body:
- email: Correo electrónico del usuario.
  - password: Contraseña del usuario.

#### signup

- Registra un nuevo usuario en la API.
- Body:
  - name: Nombre del usuario.
  - email: Correo electrónico del usuario.
  - password: Contraseña del usuario.

### Endpoints GET

#### all

- Obtiene todos los recursos.

#### one

- Solo usuario logueado (usuario que devuelve)
- Obtiene un solo recurso.
- Authorization: token;


### Body
En los endpoints POST, el cuerpo de la solicitud debe ser un objeto JSON con las propiedades especificadas.

Ejemplos
login

```
{
    "email":"raul@raul.com",
    "username":"raulv",
    "name":{
        "firstname":"Raul",
        "lastname": "Villarraso"
    },
    "password":"12345_Abc"
}
```

signup


``` 
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña"
}
```
