/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-21 00:15:41 
 * @Last Modified by: wang.hanbin@uqee.com
 * @Last Modified time: 2018-06-21 08:45:55
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
        throw new Error("Method not implemented.");
    }

    public getDataSource(): IDataSource {
        return
    }
}