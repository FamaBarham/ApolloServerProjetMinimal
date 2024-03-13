import { BaseDataSource } from './base.js';
export class ProduitsDataSource extends BaseDataSource {
    // constructor(){
    //     const port = 9001;
    //     // super(`${port}`);
    // }
    constructor() {
        super();
        this.baseURL = "http://microservice-produits:4000";
    }
}
