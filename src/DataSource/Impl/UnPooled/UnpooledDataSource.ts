/*
 * @Author: wang.hanbin@uqee.com 
 * @Date: 2018-06-21 08:44:53 
 * @Last Modified by: wang.hanbin@uqee.com
 * @Last Modified time: 2018-06-21 08:45:44
 */
import { IDataSource, DB_ENGINE } from "../../IFace/IDataSource";
import { IConnection } from "../../IFace/IConnection";
import * as db from "db";

export class UnpooledDataSource implements IDataSource {
    public engine: DB_ENGINE;
    public user: string;
    public pwd: string;
    public host: string;
    public port: string;
    public db: string;
    public autoCommi:boolean;

    protected getUrl(): string {
        return `${this.engine}://${this.user}:${this.pwd}\@${this.host}:${this.port}/${this.db}`
    }

    public constructor() {
        this.port = "3306";
    }

    public getCurrection(u: string = this.user, p: string = this.pwd): IConnection {
        return this.doGetConnection(u, p);
    }

    private doGetConnection(u: string, p: string): IConnection {
        return db.openMySQL(this.getUrl());
    }
}