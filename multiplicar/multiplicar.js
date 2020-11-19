const fs     = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) =>{ 
    let err  = '';

        if(!Number(base)){
            err += '-Base no es un numero';
        }else if( !Number(limite)){
            err += '\n-Limite no es un numero';
        }

        if (err.trim().length > 0) {
            console.log(err);
            return;
        } 

        for(let i = 1 ; i <= limite ; i++){
            console.log (`${base} * ${i} = ${base * i} \n`);
        }
}

let crearArchivo = (base ,limite = 10) =>{

    return new Promise((resolve,reject) =>{

           if(!Number(base)){
              reject(`El valor introducido ${base} no es un numero`);
              return;
           }

        for(let i = 1; i <= limite; i++)
        {
          data += `${base} * ${i} = ${base * i} \n`;
        }

fs.writeFile(`tablas/tabla_${base}-al-${limite}.txt`,data, (err) =>{
    if(err)
        reject(err)
    else
        resolve(`tabla_${base}-al-${limite}.txt`);
})

    });
}

module.exports = {crearArchivo,listarTabla};

