/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-22 09:26:54 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-23 15:09:25
 */

import * as test from "test";
import { sqlInsert, Mapper } from "../src/Annotation/Annotation";

class User {
    name: string;
    age: number;
}

@Mapper
class UserDao {

    @sqlInsert("insert into users(name,age) values(#{name},#{age})")
    public insert(user: User): number {
        return 0;
    }
}

test.describe("Mapper", () => {
    test.it("register", () => {

    })
});


test.describe("MapperAnnotationBuilder", () => {
    test.it("bulider", () => {
        new UserDao();
    });
})