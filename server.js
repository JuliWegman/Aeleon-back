import express from "express"
import cors from "cors"
import routerProducto from "./src/controller/productoController.js"
import 'dotenv/config'

const app=express();

app.use(express.json());
app.use(cors());


app.use("/producto",routerProducto)

app.listen(process.env.PORT|| 5000,()=>{console.log("SERVER CONECTADO CORRECTAMENTE en port "+process.env.PORT);})