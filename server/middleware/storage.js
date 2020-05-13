//multer es una libreria que nos permite subir ficheros
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log(file.mimetype)
             switch(file.mimetype) {
        case 'image/jpeg':
          return cb(null, './public/storage/imgs') // template strings
        case 'video/mp4':
          return cb(null, './public/storage/vid') // template video
        case 'application/pdf':
          return cb(null, './public/storage/files') //  file
        case 'audio/mpeg':
          return cb(null, './public/storage/music') // template fileMusic
/*         case 'Nota':
          return cb(null, './public/storage/imgs') // template falta */
        default:
          return 'default';
      } 
      //cb(null, './public/storage/imgs')
    },
    filename: function (req, file, cb) {
      //cb(null, file.fieldname + '-' + Date.now())

      //hacemos un split al mimetype y nos quedamos con su parte que hace referencia a la extension y la aniadimos a la creacion de la ruta
      var cadena = file.mimetype,
      separador = "/", 
      arregloDeSubCadenas = cadena.split(separador);
      console.log(arregloDeSubCadenas); // la consola devolverá: ["cadena", "de", "texto"]

      //creamos la ruta con la extension
      cb(null, `${file.fieldname}-${Date.now()}.${arregloDeSubCadenas[1]}`) // template strings

    }
  })
   
  const upload = multer({ storage: storage })


  module.exports = upload