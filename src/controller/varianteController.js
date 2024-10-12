import express from "express"
import varianteService from "../service/varianteService.js"

const router=express.Router();
const serVariante=new varianteService()

router.get("/",async (req,res)=>{
})
