/*
 * @CreateTime: Jun 15, 2018 12:48 PM
 * @Author: wang.hanbin@uqee.com
 * @Contact: wang.hanbin@uqee.com
 * @Last Modified By: wang.hanbin@uqee.com
 * @Last Modified Time: Jun 15, 2018 12:49 PM
 * @Description: Modify Here, Please 
 */

export interface ICache {
    getId(): string;
    putObject(key: Object, value: Object): void;
    getObject(key: Object): Object;
    removeObject(key: Object): Object;
    clear():void;
    getSize():number;
}