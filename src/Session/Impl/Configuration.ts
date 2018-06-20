/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-18 21:06:41 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-21 00:13:07
 */
import * as xml from "xml";
import { DataSourceType } from "../../DataSource/Impl/DataSourceType";

export class Configuration{
    public dataSourceType:DataSourceType;

    
    public xmlParser(xmlsource:string):Configuration{
        const document = xml.parse(xmlsource);
        return;
    }

    public jsonParser(jsonSource):Configuration{
        return;
    }
}