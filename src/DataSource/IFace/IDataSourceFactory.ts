/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-21 00:09:23 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-21 00:15:10
 */
import { IDataSource } from "./IDataSource";

export interface IDataSourceFactory {
    /**
     * 设置参数
     * @param value 
     */
    setProperties(value: Map<string, string>): void;
    
    /**
     * 获取数据源
     */
    getDataSource():IDataSource;
}