/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-18 21:06:41 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-24 10:32:36
 */
import { DataSourceType } from "../../DataSource/Impl/DataSourceType";
import { MapperRegistry } from "../../Mapper/MapperRegistry";
import { TypeAliasRegistry } from "../../Type/TypeAliasRegistry";
import { PooledDataSourceFactory } from "../../DataSource/Impl/Pooled/PooledDataSourceFactory";
import { UnpooledDataSourceFactory } from "../../DataSource/Impl/UnPooled/UnpooledDataSourceFactory";

export class Configuration {
    public dataSourceType: DataSourceType;
    protected mapperRegistry: MapperRegistry;
    protected typeAliasRegistry:TypeAliasRegistry;

    public constructor() {
        this.typeAliasRegistry = new TypeAliasRegistry();
        this.mapperRegistry = new MapperRegistry(this);

        this.typeAliasRegistry.registerAlias("POOLED", PooledDataSourceFactory);
        this.typeAliasRegistry.registerAlias("UNPOOLED", UnpooledDataSourceFactory);
    }

    public getMapperRegistry(): MapperRegistry {
        return this.mapperRegistry;
    }

    public getTypeAliasRegistry():TypeAliasRegistry{
        return this.typeAliasRegistry;
    }
}