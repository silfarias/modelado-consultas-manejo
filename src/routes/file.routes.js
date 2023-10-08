import { Router } from "express";
const fileRouter = Router();

fileRouter.post("/upload", (req, res) => {
    //console.log(req.files);
    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("no files were uploaded");
    }
    //sampleFile es el nombre del input 
    let sampleFile = req.files.sampleFile;
    //Guardar el archivo en la carpeta uploads con el nombre original
    let uploadPath = `./public/uploads/${sampleFile.name}`;
    sampleFile.mv(uploadPath, (err) => {
        if(err) {
            return res.status(500).send(err);
        }
        res.send('File uploaded!');
        return res.redirect("/");
    })
})

export { fileRouter };

