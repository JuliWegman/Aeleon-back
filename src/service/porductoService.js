import { Pagination, PaginationDto } from "../utils/Paginacion.js";
import productoRepository from "../repository/productoRepository.js"
const PaginacionConfig = new Pagination();


const repoProductos=new productoRepository();

export class productoService{
    async getProductos(limit, offset){
        const parsedLimit = PaginacionConfig.parseLimit(limit);
        const parsedOffset = PaginacionConfig.parseOffset(offset);
        const cantidad=Number.parseInt(await repoProductos.countProductos());
        const paginacion = PaginacionConfig.buildPaginationDto(parsedLimit, parsedOffset, cantidad, `/oficina`)

        const {data,error}=await repoProductos.getProductos(parsedLimit,parsedOffset);
        console.log(data);
        const collection={data,paginacion};
        return {collection,error};
    }

    async getProductoById(id){
        return await repoProductos.getProductoById(id)
    }

}