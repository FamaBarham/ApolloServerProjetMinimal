import { RESTDataSource } from '@apollo/datasource-rest';
export class BaseDataSource extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.url = "http://10.100.238.11";
    }
    // constructor(){
    //     super();
    //     this.baseURL = `${this.url}:${port}/`;
    // }
    async getObjects() {
        return this.get('');
    }
    async getObjectById(id) {
        return this.get(`${id}`);
    }
    async create(entity) {
        const a = this.post('', { body: entity });
        return a;
    }
}
