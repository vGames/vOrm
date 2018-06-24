/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-24 10:30:27 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-24 15:22:24
 */
import { Configuration } from "../Session/Impl/Configuration";
import { TypeAliasRegistry } from "../Type/TypeAliasRegistry";

export abstract class BaseBuilder {
    protected configuration: Configuration;
    protected typeAliasRegistry: TypeAliasRegistry;

    public constructor(configuration: Configuration) {
        this.configuration = configuration;
        this.typeAliasRegistry = this.configuration.getTypeAliasRegistry();
    }

    public getConfiguration(): Configuration {
        return this.configuration;
    }

    protected resolveClass(alias: string): any {
        if (!alias) {
            return;
        }

        return this.newInstance(this.resolveAlias(alias));
    }

    protected resolveAlias(alias: string) {
        return this.typeAliasRegistry.resolveAlias(alias);
    }

    protected newInstance(clazz: new (...args) => {}): any {
        return new clazz();
    }
}