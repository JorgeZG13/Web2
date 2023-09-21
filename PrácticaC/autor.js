//1. Definir un arreglo de objetos en base a su entidad asignada en el proyecto autónomo con por lo menos 5 elementos.
const Autor= [
    {
        cedula: 1315789618,
        nombreautor: "Jorge",
        correoautor: "jzambrano020@gmail.com",
        nacionalidadautor: "Ecuatoriano",
    },

    {
        cedula: 1313567656,
        nombreautor: "Jean",
        correoautor: "jean@gmail.com",
        nacionalidadautor: "Ecuatoriano",
    },

    {
        cedula: 1316778709,
        nombreautor: "Jerson",
        correoautor: "jersonc@gmail.com",
        nacionalidadautor: "Ecuatoriano",
    },

    {
        cedula: 1388909573,
        nombreautor: "Stiven",
        correoautor: "stiven0@gmail.com",
        nacionalidadautor: "Ecuatoriano",
    },

    {
        cedula: 1315789618,
        nombreautor: "Pancho",
        correoautor: "ppancho@gmail.com",
        nacionalidadautor: "Ecuatoriano",
    },
]
function buscarbycedula(cedula, callback)
{
  const foundautor = Autor.find((element)=>{return element.cedula === cedula})
  if (!foundautor){
    return callback("El autor requerido no ha sido encontrado");
  }
  return callback(null, foundautor);
}

buscarbycedula(1388909573,(error, autor)=>{
  if(error){
    console.log("Ha ocurrido un error")
  }
  console.log(autor)
})

/*
//2. Recorrer y mostrar 3 veces los elementos de su arreglo de objetos aplicando 3 instrucciones para ciclos distintas a su preferencia. Ejemplo forEach, for in, for of.

//foreach
Autor.forEach(function(indice){
for (let i=0; i<0; i++){
console.log(indice);
}
})
//for in
for (let indice in Autor)
{
  for (let i=0; i<0; i++)
  {
    console.log(Autor[indice]);
  }
}

//for of
for (let indice of Autor)
{
  for (let i=0; i<0; i++)
  {
    console.log(indice);
  }
}

//3. Definir una función con Callback que reciba como parámetro su arreglo de elementos y un ID y devuelva el objeto correspondiente, luego mostrarlo por consola usando el callback
function buscarbycedula(cedula, callback)
{
  const foundautor = Autor.find((element)=>{return element.cedula === cedula})
  if (!foundautor){
    return callback("El autor requerido no ha sido encontrado");
  }
  return callback(null, foundautor);
}

buscarbycedula(1388909573,(error, autor)=>{
  if(error){
    console.log("Ha ocurrido un error")
  }
  console.log(autor)
})*/