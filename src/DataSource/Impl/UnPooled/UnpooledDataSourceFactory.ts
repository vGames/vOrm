/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-21 00:15:41 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-27 00:15:54
 */
import { IDataSourceFactory } from "../../IFace/IDataSourceFactory";
import { IDataSource } from "../../IFace/IDataSource";
import { UnpooledDataSource } from "./UnpooledDataSource";

export class UnpooledDataSourceFactory implements IDataSourceFactory {
    protected dataSource: IDataSource;
    private static readonly POOL_PROPERTY_PREFIOX: string = "pool";
    private static readonly DRIVER_PROPERTY_PREFI0X: string = "driver";

    public constructor() {
        this.dataSource = new UnpooledDataSource();
    }

    public setProperties(map: Map<string, string>): void {
        const proxy = new Proxy(this.dataSource, {
            set: function (target: IDataSource, p: string, value: string) {
                if (p != UnpooledDataSourceFactory.DRIVER_PROPERTY_PREFI0X && !p.startsWith(UnpooledDataSourceFactory.POOL_PROPERTY_PREFIOX)) {
                    return Reflect.set(target[UnpooledDataSourceFactory.DRIVER_PROPERTY_PREFI0X], p, value);
                } else {
                    return Reflect.set(target, p, value);
                }
            }
        });

        const driver = map.get("driver");
        if (!driver) {
            throw "";
        }

        proxy[UnpooledDataSourceFactory.DRIVER_PROPERTY_PREFI0X] = driver;
        map.delete("driver");
        for (let [k, v] of map) {
            proxy[k] = v;
        }
    }

    public getDataSource(): IDataSource {
        return this.dataSource;
    }
}