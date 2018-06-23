/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-22 08:55:59 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-22 09:43:51
 */
import { SqlSession } from "../Session/Impl/SqlSession";
import { MapperProxy } from "./MapperProxy";

export class MapperProxyFactory<T extends object>{
    private mapper: Function;

    public constructor(mapper: new (...args: any[]) => T) {
        this.mapper = mapper;
    }

    public newInstance(sqlSession: SqlSession): T {
        const mapper = new MapperProxy<T>();
        const proxy = new Proxy(mapper, {
            set: function (target: MapperProxy<T>, p: PropertyKey, value: any, receiver: any) {
                return true;
            },
            get: function (target: MapperProxy<T>, p: PropertyKey, receiver: any) {

            }
        });

        return proxy as T;
    }
}