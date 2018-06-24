/*
 * @Author: wang.hanbin@uqee.com 
 * @Date: 2018-06-21 08:42:42 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-24 21:50:37
 */
import { UnpooledDataSourceFactory } from "../UnPooled/UnpooledDataSourceFactory";
import { PooledDataSource } from "./PooledDataSource";

export class PooledDataSourceFactory extends UnpooledDataSourceFactory {
    public constructor() {
        super();
        this.dataSource = new PooledDataSource();
    }
}