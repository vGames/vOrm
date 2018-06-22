/*
 * @Author: wang.hanbin@uqee.com 
 * @Date: 2018-06-21 08:44:53 
 * @Last Modified by: wang.hanbin@uqee.com
 * @Last Modified time: 2018-06-21 08:45:44
 */
import { IDataSource } from "../../IFace/IDataSource";
import { IConnection } from "../../IFace/IConnection";

export class UnpooledDataSource implements IDataSource {

    public getCurrection(): IConnection {
        return;
    }
}