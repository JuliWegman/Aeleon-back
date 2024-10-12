import express from "express"
import {productoService} from "../service/porductoService.js"
import varianteService from "../service/varianteService.js"
const router=express.Router();
const proService=new productoService();
const varService=new varianteService()
router.get("/",async (req,res)=>{

    const limit=req.query.limit;
    const offset=req.query.offset;
    const {collection,error}= await proService.getProductos(limit,offset)
        
    if (error!=null) {
        console.log(error);
        return res.status(400).send(error)
    }else{
        return res.status(200).json(collection)
    }
})

router.get("/:id",async(req,res)=>{
    const id=req.params.id

    const {data,error}=await proService.getProductoById(id)
    if (error!=null) {
        console.log(error);
        return res.status(400).send(error)
    }else if(data==null){
        
        return res.status(404).send("NO EXISTE UN PRODUCTO CON ESA ID")
    }else{
        return res.status(200).json(data)
    }
})
router.get("/:id/variantes",async(req,res)=>{
    const id=req.params.id;
    const {data,error}=await varService.getVariantesByProducto(id)
    if (error!=null) {
        console.log(error);
        return res.status(400).send(error)
    }else if(data==null){
        
        return res.status(404).send("NO HAY VARIANTES CON ESA ID DE PRODUCTO")
    }else{
        return res.status(200).json(data)
    }
})


export default router