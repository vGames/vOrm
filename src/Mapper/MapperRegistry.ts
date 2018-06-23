/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-22 08:52:47 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-23 14:54:59
 */
import { Configuration } from "../Session/Impl/Configuration";
import { MapperProxyFactory } from "./MapperProxyFactory";

export class MapperRegistry {
    private config: Configuration;
    private knownMappers: Map<{ new(...args: any[]): {} }, MapperProxyFactory<any>> = new Map<{ new(...args: any[]): {} }, MapperProxyFactory<any>>();

    public constructor(config: Configuration) {
        this.config = config;
    }

    public hasMapper<T>(clazz: new () => T): boolean{
        return this.knownMappers.has(clazz);
    }

    /*
    public getMapper<T>(clazz: { new(...args: any[]): {} }): T {
        this.knownMappers.set(clazz,new MapperProxyFactory(clazz));
        
    }
    */
}