/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-22 09:37:00 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-22 09:38:01
 */
import { SqlSession } from "../Session/Impl/SqlSession";

export class MapperProxy<T>{
    private sqlSession:SqlSession;
    private mapper:Function;
}