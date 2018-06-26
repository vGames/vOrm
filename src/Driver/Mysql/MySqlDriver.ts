/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-26 08:30:48 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-26 09:31:11
 */
import { IDriver, DriverParameter } from "../IFace/IDriver";
import { IConnection } from "../../DataSource/IFace/IConnection";
import * as db from "db";

export class MySqlDriver<T = "mysql"> implements IDriver<T> {

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
     * @private
     * @type {IMySqlParameter}
     * @memberof MySqlDriver
     */
    private _parameters: DriverParameter<T>;

    /**
     *
     *
     * @template T
     * @returns {DriverParameter<T>}
     * @memberof MySqlDriver
     */
    public get parameters(): DriverParameter<T> {
        return this._parameters as DriverParameter<T>;
    }

    /**
     *
     *
     * @memberof MySqlDriver
     */
    public set parameters(param: DriverParameter<T>) {
        this._parameters = param;
    }

    /**
     *
     *
     * @param {string} name
     * @returns {string}
     * @memberof MySqlDriver
     */
    public getParameter(name: string): string {
        return null;
    }

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

    /**
     *
     *
     * @memberof MySqlDriver
     */
    public close(conn: IConnection): void {
        conn.close();
    }
}