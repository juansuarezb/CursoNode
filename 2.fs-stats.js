const fs = require('node:fs');
const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile() ? 'Es un archivo\n' : 'No es un archivo \n',
    stats.isDirectory() ? 'Es un directorio\n' : 'No es un directorio \n',
    stats.isSymbolicLink() ? 'Es un enlace simbolico\n' : 'No es un enlace simbolico \n',
    stats.size + ' bytes',
)