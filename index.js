let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
let PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.listen(PORT, err =>{
    if(err) throw new Error(`Error en servidor ${err}`)
    console.log(`El servidor se está ejecutando en el puerto ${PORT}`);
})