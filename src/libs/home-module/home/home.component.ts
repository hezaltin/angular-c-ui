/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

import {TreeNode} from 'primeng/api';
import { NodeService } from "./home.component.service";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    filesTree:any
    selectedFiles:any
    constructor(private nodeService:NodeService){

    }

    ngOnInit(){
        this.nodeService.getFiles().subscribe(files => {
            console.log(files)
            this.selectedFiles =[files[0]]
            this.filesTree = files
        
        });
    }

}
