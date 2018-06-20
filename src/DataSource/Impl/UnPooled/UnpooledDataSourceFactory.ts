/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-21 00:15:41 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-21 00:19:40
 */
import { IDataSourceFactory } from "../../IFace/IDataSourceFactory";
import { IDataSource } from "../../IFace/IDataSource";

export class UnpooledDataSourceFactory implements IDataSourceFactory{
    
    public setProperties(value: Map<string, string>): void {
        throw new Error("Method not implemented.");
    }

    public getDataSource():IDataSource{
        return
    }
}