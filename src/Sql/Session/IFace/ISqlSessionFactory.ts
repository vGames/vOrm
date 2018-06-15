/*
 * @CreateTime: Jun 15, 2018 9:22 AM
 * @Author: wang.hanbin@uqee.com
 * @Contact: wang.hanbin@uqee.com
 * @Last Modified By: wang.hanbin@uqee.com
 * @Last Modified Time: Jun 15, 2018 9:23 AM
 * @Description: Modify Here, Please 
 */
import { SqlSession } from "../Impl/SqlSession";

export interface ISqlSessionFactory{
    openSession():SqlSession
}