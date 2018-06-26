/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-26 23:45:39 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-27 00:14:39
 */
import { DriverParameter, IDriver } from "./IFace/IDriver";
import { IConnection } from "../DataSource/IFace/IConnection";

export class Driver<T> implements IDriver<T>{

    /**
     * 
     */
    public static fromDriver<T>(): IDriver<T> {
        return new this();
    }

    /**
     * 
     */
    public url: string;

    /**
     * 
     */
    public constructor() {
        this._parameters = Object.create(null) as DriverParameter<T>;
    }

    /**
     *
     *
     * @private
     * @type {IMySqlParameter}
     * @memberof Driver<T>
     */
    private _parameters: DriverParameter<T>;

    /**
     *
     *
     * @template T
     * @returns {DriverParameter<T>}
     * @memberof Driver<T>
     */
    public get parameters(): DriverParameter<T> {
        return this._parameters as DriverParameter<T>;
    }

    /**
     *
     *
     * @memberof Driver<T>
     */
    public set parameters(param: DriverParameter<T>) {
        this._parameters = param;
    }

    /**
     *
     *
     * @param {string} name
     * @returns {string}
     * @memberof Driver<T>
     */
    public getParameter(name: string): string {
        return this.parameters[name];
    }

    /**
     * 
     */
    public open(): IConnection {
        throw "not implenements"
    }

    /**
     * 
     * @param conn 
     */
    public close(conn: IConnection): void {
        conn.close();
    }
}