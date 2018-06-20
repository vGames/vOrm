/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-20 23:20:30 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-20 23:29:58
 */

export interface IConnection{

    /**
     * 执行一条sql
     * @param sql sql
     * @param args 参数
     */
    execute(sql:string,...args:Array<any>):Array<any>;   

    /**
     * 启动一个事物
     */
    begin():void;

    /**
     * 进入事务执行一个函数,并根据函数执行情况提交或者回滚
     * @param func 以事务方式执行的函数
     * 
     * @description
     * func 执行有三种结果：
     *
     *   函数正常返回，包括运行结束和主动 return，此时事务将自动提交
     *   函数返回 false，此时事务将回滚
     *   函数运行错误，事务自动回滚
     * 
     */
    transition(func:Function):boolean;

    /**
     * 提交当前数据库连接上的事务
     */
    commit():void;

    /**
     * 回滚当前数据库连接上的事务
     */
    rollback():void;
}