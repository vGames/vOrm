/*
 * @Author: wang.hanbin@uqee.com 
 * @Date: 2018-06-21 08:44:53 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-27 00:13:23
 */
import { IDataSource } from "../../IFace/IDataSource";
import { IConnection } from "../../IFace/IConnection";
import { IDriver, Driver } from "../../../Driver/IFace/IDriver";
import { MySqlDriver } from "../../../Driver/Mysql/MySqlDriver";

export class UnpooledDataSource implements IDataSource {

    /**
     *
     *
     * @type {IDriver<keyof Driver>}
     * @memberof UnpooledDataSource
     */
    private _driver: IDriver<keyof Driver>;
    public set dirver(name: string) {
        switch (name) {
            case "mysql": this._driver = MySqlDriver.fromDriver<"mysql">(); break;
            default: throw "not implements";
        }
    }
    public get driver(): IDriver<keyof Driver> {
        return this._driver;
    }

    /**
     *
     *
     * @type {boolean}
     * @memberof UnpooledDataSource
     */
    public autoCommit: boolean;

    /**
     *
     *
     * @protected
     * @returns {string}
     * @memberof UnpooledDataSource
     */
    protected getUrl(): string {
        return this.driver.url;
    }

    /**
     *
     *
     * @param {string} [u=this.driver.parameters.user]
     * @param {string} [p=this.driver.parameters.pwd]
     * @returns {IConnection}
     * @memberof UnpooledDataSource
     */
    public getCurrection(u: string = this.driver.parameters.user, p: string = this.driver.parameters.pwd): IConnection {
        return this.doGetConnection(u, p);
    }

    /**
     *
     *
     * @private
     * @param {string} u
     * @param {string} p
     * @returns {IConnection}
     * @memberof UnpooledDataSource
     */
    private doGetConnection(u: string, p: string): IConnection {
        return this.driver.open();
    }
}