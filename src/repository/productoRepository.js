import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'
import pg from 'pg'

export default class productoRepository{
    
    constructor() {
        const { Client } = pg;
        this.BDclient = new Client(BDconfig);
        this.BDclient.connect();
      }
      async getProductoById(id){
        let data=null;
        var error=null;
        try {
            var sql="select * FROM producto where id=$1"
            const values=[id]
            const result=await this.BDclient.query(sql,values)
            
            console.log(result);
            data=result.rows[0];
            
        } catch (e) {
            error=e;
            console.log(error);
        }
        return {data,error}
      }


      async getProductos(limit,offset){
        let data=null;
        var error=null;
        try {
            var sql="select * from producto limit $1 offset $2"
            const values=[limit,offset]
            const result=await this.BDclient.query(sql,values)
            if(result.rows.length>0){
                data=result.rows;
            }
        } catch (e) {
            error=e;
            console.log(error);
        }
        console.log(data);
        return {data,error}
      }

      async countProductos(){
        let data=null;
        var error=null;
        try {
            var sql="select COUNT(*) from Producto"
            const result=await this.BDclient.query(sql)
            data=result.rows[0].count

        } catch (e) {
            error=e;
            console.log(error);
        }
        return data
    }

}