/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-26 08:30:48 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-27 00:11:33
 */
import { IDriver, MYSQL } from "../IFace/IDriver";
import { IConnection } from "../../DataSource/IFace/IConnection";
import * as db from "db";
import { Driver } from "../Driver";

export class MySqlDriver<T = MYSQL> extends Driver<T> implements IDriver<T> {

    /**
     *Creates an instance of MySqlDriver.
     * @memberof MySqlDriver
     */
    private constructor() {
        super();
    }

    /**
     *
     *
     * @type {string}
     * @memberof MySqlDriver
     */
    public name: string = "mysql";

    /**
     *
     *
     * @readonly
     * @type {string}
     * @memberof MySqlDriver
     */
    public get url(): string {
        let parameters = this.parameters;
        return `${this.name}://${parameters.user}:${parameters.pwd}\@${parameters.host}:${parameters.port}/${parameters.db}`;
    }

    /**
     *
     *
     * @returns {IConnection}
     * @memberof MySqlDriver
     */
    public open(): IConnection {
        return db.openMySQL(this.url);
    }
}