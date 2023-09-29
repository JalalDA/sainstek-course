import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Konfigurasi Multer untuk mengunggah gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = './public/uploads/';
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `${Date.now()}${ext}`);
    },
  });
  
 export const upload = multer({ storage });