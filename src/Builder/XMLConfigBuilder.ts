/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-23 17:28:05 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-24 15:24:27
 */
import { Document, XmlDocument, XmlNode, XmlText, XmlElement } from "xml";
import { readFile, exists } from "fs";
import { FileNotExists } from "../Exception/FileNotExists";
import { Configuration } from "../Session/Impl/Configuration";
import { ConfigNodeNotExists } from "../Exception/ConfigNodeNotExists";
import { IDataSourceFactory } from "../DataSource/IFace/IDataSourceFactory";
import { TypeAliasRegistry } from "../Type/TypeAliasRegistry";
import { BaseBuilder } from "./BaseBuilder";

export class XMLConfigBuilder extends BaseBuilder {
    private _parsed: boolean;
    protected typeAliasRegistry: TypeAliasRegistry;
    protected readonly configuration: Configuration;
    protected readonly xmldocument: XmlDocument;

    public constructor(cfg: string | XmlDocument) {
        super(new Configuration());
        this._parsed = false;

        if (typeof cfg == "string") {
            cfg = this.loadCfg(cfg);
        }

        this.xmldocument = cfg;
    }

    private loadCfg(cfg: string): XmlDocument {
        if (!exists(cfg)) {
            throw new FileNotExists(cfg);
        }

        let buffer = readFile(cfg);
        if (buffer) {
            let doc = new Document();
            doc.load(buffer);

            return doc;
        }

        throw new FileNotExists(cfg);
    }

    public parse(): Configuration {
        if (!this._parsed) {
            this._parsed = true;
            this.parseCfg(this.getCfgNode(this.xmldocument, "configuration"));
            return this.configuration;
        }
    }

    public getCfgNode(root: XmlDocument | XmlNode, name: string): XmlNode | XmlElement {
        const length = root.childNodes.length, childNodes = root.childNodes;
        for (let i = 0; i < length; i++) {
            let node = childNodes.item(i);
            let n = node.nodeName;
            if (n === "#comment") {
                continue;
            } else if (n === name) {
                return node;
            }
        }
    }

    private parseCfg(cfg: XmlNode): void {
        if (!cfg) {
            throw new ConfigNodeNotExists("");
        }

        const source: XmlElement = this.getCfgNode(cfg, "dataSource") as XmlElement;
        this.parseDataSource(source);
    }

    private parseDataSource(elem: XmlElement): void {
        if (elem) {
            const type = elem.getAttribute("type");
            const factory = <IDataSourceFactory>this.resolveClass(type);
            
        }
    }
}