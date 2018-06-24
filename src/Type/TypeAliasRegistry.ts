/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-23 23:37:39 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-24 10:17:57
 */
import * as Long from "long";
import { TypeException } from "../Exception/TypeException";

export class TypeAliasRegistry {
    private TYPE_ALIASES: Map<String, { new(...args: any[]): {} }> = new Map();

    public constructor() {
        this.registerAliasList(
            [
                { alias: "string", clazz: String }
            ]
        );
    }

    public registerAliasList(list: Array<{ alias: string, clazz: { new(...args: any[]): {} } }>): void {
        list.forEach(e => {
            this.registerAlias(
                e.alias,
                e.clazz
            );
        })
    }

    public registerAlias(alias: string, clazz: { new(...args: any[]): {} }): void {
        if (!alias) {
            throw new TypeException("");
        }

        const key = alias.toLocaleLowerCase();
        if (this.TYPE_ALIASES.has(key) && this.TYPE_ALIASES.get(key) && this.TYPE_ALIASES.get(key) == clazz) {
            throw new TypeException("The alias '" + alias + "' is already mapped to the value '" + clazz.name + "'.");
        }

        this.TYPE_ALIASES.set(key, clazz);
    }

    public resolveAlias(string: string): { new(...args: any[]): {} } {
        const key = string.toLocaleLowerCase();
        return this.TYPE_ALIASES.get(key);
    }
}