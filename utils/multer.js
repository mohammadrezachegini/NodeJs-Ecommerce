const multer = require('multer');
const path = require('path');
const fs = require('fs');
const createError = require('http-errors');

function createRoute(req){
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString();
    const day = date.getDate().toString();
    const directory = path.join(__dirname, "..", "public", "uploads", "blogs",  year, month, day);
    // if (req && req.body) {
    req.body.fileUploadPath = path.join("uploads","blogs", year, month, day);
    // }    
    fs.mkdirSync(directory, { recursive: true });
    return directory;
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file?.originalname){
            const filePath = createRoute(req);
            return cb(null, filePath);
        }
        cb(null,null)
    },
    filename: (req, file, cb) => {
        if(file.originalname){
            const ext = path.extname(file.originalname);
            const fileName = String(new Date().getTime() + ext);
            req.body.filename = fileName;
            return cb(null, fileName);
        }
        cb(null, null);
    }
});

function fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname);

    const mimTypes = [".webp", ".jpeg", ".png", ".jpg", ".gif"];
    if (mimTypes.includes(ext)) {
        return cb(null, true);
    }
    return cb(createError.BadRequest("Invalid file type!"))
}


const maxSize = 1 * 1024 * 1024;

const uploadFile = multer({ storage: storage, fileFilter:fileFilter, limits: { fileSize: maxSize } });
module.exports = {
    uploadFile
}