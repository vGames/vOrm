/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-23 17:39:31 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-23 17:59:07
 */

export class FileNotExists extends Error {
    public constructor(msg: string) {
        super(`${msg} is not exists`);
    }
}

