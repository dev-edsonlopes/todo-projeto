import axios from '../utils/axios'

export default class Todos {
    async index() {
        const response = await axios.get('/todos') // teste GET
        return response
    }
}