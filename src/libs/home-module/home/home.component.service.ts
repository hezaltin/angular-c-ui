import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TreeNode } from "@angular/router/src/utils/tree";
import { Observable } from "rxjs";
import {TreeNodes} from './tree-nodes'


@Injectable()
export class NodeService {

    constructor(private http: HttpClient) {}

    getFiles() {
        return Observable.of(TreeNodes.data)
    }
}