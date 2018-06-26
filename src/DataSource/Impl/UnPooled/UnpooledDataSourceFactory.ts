/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-21 00:15:41 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-26 09:45:57
 */
import { IDataSourceFactory } from "../../IFace/IDataSourceFactory";
import { IDataSource } from "../../IFace/IDataSource";
import { UnpooledDataSource } from "./UnpooledDataSource";

export class UnpooledDataSourceFactory implements IDataSourceFactory {
    protected dataSource: IDataSource;
    

    public constructor(){
        this.dataSource = new UnpooledDataSource();
    }

    public setProperties(value: Map<string, string>): void {
        
        // throw new Error("Method not implemented.");
    }

    public getDataSource(): IDataSource {
        return
    }
}