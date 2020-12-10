import multer from 'multer';
import fs from 'fs';
import ErrorHandler from '../utils/errorHandler.js';

const PATH = './public/images';

function fileFilter(req, file, callback) {
  const filetypes = /\.(jpeg|jpg|png)$/;
  if (!file.originalname.match(filetypes)) {
    return callback(new ErrorHandler('Kun bilder er tillatt', 400));
  }
  callback(null, true);
}

const createFileName = (originalName) => {
  const parts = originalName.split('.');
  let i = 0;
  let newFileName = `image_${parts[0]}_${i}.${parts[parts.length - 1]}`;
  while (fs.existsSync(`${PATH}/${newFileName}`)) {
    i += 1;
    newFileName = `image_${parts[0]}_${i}.${parts[parts.length - 1]}`;
  }
  return newFileName;
};

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, PATH);
  },
  filename(req, file, callback) {
    callback(null, createFileName(file.originalname));
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 2000000 },
  fileFilter,
}).single('image');
