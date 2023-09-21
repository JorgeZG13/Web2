interface Autor {
    cedula: number;
    nombreautor: string;
    correoautor: string;
    nacionalidadautor: string;
}

const Autors: Autor[] = [
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
];

//2. Recorrer y mostrar 3 veces los elementos de su arreglo de objetos aplicando 3 instrucciones para ciclos distintas a su preferencia. Ejemplo forEach, for in, for of.

//foreach
Autors.forEach((elemento) => {
    for (let i = 0; i <2; i++) {
      console.log(elemento);
    }
  });

  //for in
for (const elemento of Autors) {
    for (let i = 0; i < 3; i++) {
      console.log(elemento);
    }
  }  

//for of
for (let elemento of Autors) {
    for (let i = 0; i < 3; i++) {
      console.log(elemento);
    }
  }