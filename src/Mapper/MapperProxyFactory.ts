/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-22 08:55:59 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-22 09:43:51
 */
import { SqlSession } from "../Session/Impl/SqlSession";
import { MapperProxy } from "./MapperProxy";

export class MapperProxyFactory<T>{
    private mapper: Function;

    public constructor(mapper: Function) {
        this.mapper = mapper;
    }

    public newInstance(sqlSession: SqlSession): T {
        const mapper = new MapperProxy();
        const proxy = new Proxy(mapper, {

        });

        // return proxy as T;
        return;
    }
}