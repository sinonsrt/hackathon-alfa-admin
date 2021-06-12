const multer = require('multer');
const { extname, resolve } = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

module.exports = {
   // validação para tipo de arquivo
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo deve ser PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    // onde sera salvo as fotos
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', 'uploads'));
    },
    // nome do arquivo
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
}