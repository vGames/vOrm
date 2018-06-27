/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-20 23:31:20 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-20 23:35:09
 */
import { IConnection } from "./IConnection";
import { IDriver, Driver } from "../../Driver/IFace/IDriver";

export interface IDataSource {

    /**
     *
     *
     * @type {IDriver<keyof Driver>}
     * @memberof IDataSource
     */
    driver: IDriver<keyof Driver>;

    /**
     * 获取一个链接
     */
    getCurrection(): IConnection;
}