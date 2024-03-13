import { RESTDataSource } from '@apollo/datasource-rest';
class AuthAPI extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = 'http://localhost:3000/';
    }
    async login(email, password) {
        const a = this.post('login', { body: { email: email, password: password } });
        return a;
    }
    async register(firstName, lastName, email, password) {
        const a = this.post('register', { body: { firstName: firstName, lastName: lastName, email: email, password: password } });
        return a;
    }
}
export { AuthAPI };
