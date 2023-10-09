import { Router } from "express";
const fileRouter = Router();

fileRouter.post("/upload", (req, res) => {

    if(!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send("No files were uploaded")
        return ;
    } 

    let file = req.files.archivo;
    let path = `public/uploads/${file.name}`;
    console.log(path)

    file.mv(path, (err) => {
        if(err) {
            return res.status(500).send(err);
        }
        res.send('File uploaded!');
        return res.redirect("/");
    })
});

export { fileRouter };

