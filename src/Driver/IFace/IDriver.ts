/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-26 08:28:30 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-26 09:29:04
 */
import { IConnection } from "../../DataSource/IFace/IConnection";
import { IMySqlParameter } from "./IMySqlParameter";
import { MySqlDriver } from "../Mysql/MySqlDriver";

export interface Driver {
    "mysql": MySqlDriver<"mysql">
}
export type DriverParameter<T> = T extends "mysql" ? IMySqlParameter : IMySqlParameter;
export interface IDriver<T> {

    /**
     *
     *
     * @type {string}
     * @memberof IDriver
     */
    url: string;

    /**
     *
     *
     * @template T
     * @returns {DriverParameter<T>}
     * @memberof IDriver
     */
    parameters: DriverParameter<T>;

    /**
     *
     *
     * @param {string} name
     * @returns {string}
     * @memberof IDriver
     */
    getParameter(name: string): string;

    /**
     *
     *
     * @returns {IConnection}
     * @memberof IDriver
     */
    open(): IConnection;

    /**
     *
     *
     * @memberof IDriver
     */
    close(conn: IConnection): void;
}