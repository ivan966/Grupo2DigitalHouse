//requires de modulos
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

//requires de rutas
const indexRouter = require("./routes/indexRouter");
const productosRouter = require("./routes/productosRouter");
const usersRouter = require("./routes/usersRouter");
const carritoRouter = require("./routes/carritoRouter");

//creacion de servidor
const app = express();

//configuracion body-parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//path
const publicPath = path.resolve(__dirname, "/public");
app.use(express.static("public"));

//alta de servidor puerto 3030
app.listen(3030, () => console.log("El puerto de inicio es: 3030"));

//Configuracion motor de plantillas-EJS
app.set("view engine", "ejs");

//Method override
app.use(methodOverride("_method"));

//home
app.get("/", indexRouter);

//carrito
app.get("/carrito", carritoRouter);
//users
app.get("/login", usersRouter);
app.post("/login", usersRouter);
app.get("/register", usersRouter);
app.post("/register", usersRouter);


//PRODUCTOS
app.get("/productos", productosRouter);

//crear
app.get("/productos/create", productosRouter);
app.post("/productos/created", productosRouter);
//Actualizar y eliminar
app.get("/productos/:id/edit", productosRouter);
app.get("/productos/delete", productosRouter);
app.put("/productos/:id", productosRouter);
app.delete("/productos/:id", productosRouter);
//<----------->
app.get("/productos/:id", productosRouter);
//<----------->
//registro
