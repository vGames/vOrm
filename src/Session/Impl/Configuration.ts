/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-18 21:06:41 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-23 16:30:40
 */
import * as xml from "xml";
import { DataSourceType } from "../../DataSource/Impl/DataSourceType";
import { MapperRegistry } from "../../Mapper/MapperRegistry";

export class Configuration {
    public dataSourceType: DataSourceType;
    protected mapperRegistry: MapperRegistry;

    public constructor() {
        this.mapperRegistry = new MapperRegistry(this);
    }

    public getMapperRegistry(): MapperRegistry {
        return this.mapperRegistry;
    }

    public xmlParser(xmlsource: string): Configuration {
        const document = xml.parse(xmlsource);
        return;
    }

    public jsonParser(jsonSource): Configuration {
        return;
    }
}