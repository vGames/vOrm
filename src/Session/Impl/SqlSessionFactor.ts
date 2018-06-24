/*
 * @CreateTime: Jun 15, 2018 9:19 AM
 * @Author: wang.hanbin@uqee.com
 * @Contact: wang.hanbin@uqee.com
 * @Last Modified By: wang.hanbin@uqee.com
 * @Last Modified Time: Jun 15, 2018 9:19 AM
 * @Description: Modify Here, Please 
 */
import { ISqlSessionFactory } from "../IFace/ISqlSessionFactory";
import { SqlSession } from "./SqlSession";
import { Configuration } from "./Configuration";
import * as path from "path";
import { XMLConfigBuilder } from "../../Builder/XMLConfigBuilder";

export class SqlSessionFactory implements ISqlSessionFactory {
    private readonly cfg: Configuration;

    public constructor(cfg: string);
    public constructor(cfg: Configuration | string) {
        if (typeof cfg == "string") {
            if(cfg.endsWith("xml")){
                const parser = new XMLConfigBuilder(cfg as string);
            }
        }
        this.cfg = cfg as Configuration;
    }

    public openSession(): SqlSession {
        return void 0;
    }
}