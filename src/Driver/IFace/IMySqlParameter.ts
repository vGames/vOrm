/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-26 08:55:11 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-26 08:55:37
 */

export interface IMySqlParameter{
     /**
     *
     *
     * @type {string}
     * @memberof IMySqlParameter
     */
    user:string;

    /**
     *
     *
     * @type {string}
     * @memberof IMySqlParameter
     */
    pwd:string

    /**
     *
     *
     * @type {string}
     * @memberof IMySqlParameter
     */
    url: string;

    /**
     *
     *
     * @type {string}
     * @memberof IMySqlParameter
     */
    host: string;

    /**
     *
     *
     * @type {string}
     * @memberof IMySqlParameter
     */
    port: string;

    /**
     *
     *
     * @type {string}
     * @memberof IMySqlParameter
     */
    db: string;
}