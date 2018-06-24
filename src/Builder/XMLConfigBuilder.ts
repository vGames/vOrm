/*
 * @Author: 544430497@qq.com 
 * @Date: 2018-06-23 17:28:05 
 * @Last Modified by: 544430497@qq.com
 * @Last Modified time: 2018-06-24 22:45:03
 */
import { Document, XmlDocument, XmlNode, XmlElement } from "xml";
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
        const config = new Configuration();
        super(config);

        //do this why error?
        // super(new Configuration());
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
            this.parseCfg(this.getCfgNode(this.xmldocument, "configuration") as XmlDocument);
            return this.configuration;
        }
    }

    public getCfgNode(root: XmlDocument | XmlNode, name: string, all: boolean = false): XmlNode | XmlElement | Array<XmlNode | XmlElement> {
        const length = root.childNodes.length, childNodes = root.childNodes;
        let nodes: Array<XmlNode | XmlElement>;

        if (all) nodes = [];
        for (let i = 0; i < length; i++) {
            let node = childNodes.item(i);
            let n = node.nodeName;
            if (n === "#comment") {
                continue;
            } else if (n === name) {
                if (!all) return node;
                nodes.push(node);
            }
        }

        return nodes;
    }

    private parseCfg(cfg: XmlNode): void {
        if (!cfg) {
            throw new ConfigNodeNotExists("");
        }

        const source: XmlElement = this.getCfgNode(cfg, "dataSource") as XmlElement;
        this.parseDataSource(source);
    }

    private parseDataSource(elem: XmlElement): IDataSourceFactory {
        if (elem) {
            const type = elem.getAttribute("type");
            const factory = <IDataSourceFactory>this.resolveClass(type);
            const props = this.getSourceProps(elem);
            factory.setProperties(props);
            return factory;
        }
    }

    protected getSourceProps(elem: XmlElement): Map<string, string> {
        let map = new Map<string, string>();
        const props = this.getCfgNode(elem, "property", true) as Array<XmlElement>;
        props.forEach(e => {
            map.set(
                e.getAttribute("name"),
                e.getAttribute("value")
            );
        });

        return map;
    }
}