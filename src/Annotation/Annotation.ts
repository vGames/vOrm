/*
 * @CreateTime: Jun 15, 2018 9:24 AM
 * @Author: wang.hanbin@uqee.com
 * @Contact: wang.hanbin@uqee.com
 * @Last Modified By: wang.hanbin@uqee.com
 * @Last Modified Time: Jun 15, 2018 12:46 PM
 * @Description: Modify Here, Please 
 */

export function Mapper<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        public isMapper: boolean = true;
    };
}

export function sqlInsert(sql: string) {
    return function (target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor) {
        let ret;
        const method = descriptor.value;
        descriptor.value = function (args: any) {

            ret = method.apply(this, args);
            return ret;
        };
        return descriptor;
    };
}

export function sqlSelete(sql: string, useCache: boolean = true) {

}

export function sqlUpdate() {

}

export function sqlDelete() {

}

export function sqlParam() {

}