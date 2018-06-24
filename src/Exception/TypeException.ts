/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-24 09:41:28 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-24 09:44:46
 */

export class TypeException extends Error {
    public constructor(msg: string) {
        super(msg || "The parameter alias cannot be null");
    }
}