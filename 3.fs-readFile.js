const fs = require('node:fs')
console.log('Leyendo archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text)=>{
    console.log('primer texto:', text)
})


console.log("Hacer cosas mientras lee el archivo...")
console.log('Leyendo 2do archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err,text)=>{
    console.log('segundo texto:',text)
})
