import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'
import pg from 'pg'

export default class varianteRepository{
    
    constructor() {
        const { Client } = pg;
        this.BDclient = new Client(BDconfig);
        this.BDclient.connect();
    }

    async GetVariantesByProducto(idProducto){

        var data=null,error=null;

        try {
            var sql="SELECT * FROM variante WHERE id_producto=$1"
            const values=[idProducto]
            const result=await this.BDclient.query(sql,values)
            if(result.rows.length>0){
                data=result.rows;
            }

        } catch (e) {
            error=e;
            console.log(error);
        }
        return {data,error}

    }

}