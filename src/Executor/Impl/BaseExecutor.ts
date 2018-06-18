/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-18 20:35:05 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-18 21:07:12
 */
import { IExecutor } from "../IFace/IExecutor";
import { Configuration } from "../../Session/Impl/Configuration";

export class BaseExecutor implements IExecutor{
    private configuration:Configuration;

    public constructor(configuration:Configuration){
        this.configuration = configuration;
    }
}