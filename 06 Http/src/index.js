import * as CRUD from "./js/crud-provider";

// Listando un usuario

//CRUD.getUsuario(1).then(console.log);

// Creando un usuario
/* 
  CRUD.crearUsuario({
  name: "Sergio",
  job: "Programador"
}).then(console.log);
 */

// Actualizando un Usuario
/* 
CRUD.actualizarUsuario(1, {
  name: "Cristiano",
  job: "Futbolista",
}).then(console.log);
 */

// Eliminado Usuario

CRUD.borrarUsuario(1).then(console.log);
