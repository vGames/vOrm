/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-23 22:59:53 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-23 23:00:14
 */

export class ConfigNodeNotExists extends Error {
    public constructor(msg: string) {
        super(`${msg} config is not exists`);
    }
}
