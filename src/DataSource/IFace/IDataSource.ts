/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-20 23:31:20 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-20 23:35:09
 */
import { IConnection } from "./IConnection";

export interface IDataSource{

    /**
     * 获取一个链接
     */
    getCurrection():IConnection;
}

export type DB_ENGINE = "mysql";