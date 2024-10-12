import { Pagination, PaginationDto } from "../utils/Paginacion.js";
import productoRepository from "../repository/productoRepository.js"
import varianteRpository from "../repository/varianteRepository.js"
import varianteRepository from "../repository/varianteRepository.js";

const PaginacionConfig = new Pagination();

const repoVariante=new varianteRepository()
const repoProductos=new productoRepository();

export default class productoService{
    
    async getVariantesByProducto(idProducto){
        return await repoVariante.GetVariantesByProducto(idProducto)
    }

}
