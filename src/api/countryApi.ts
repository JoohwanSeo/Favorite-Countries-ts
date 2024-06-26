import {AxiosInstance } from "axios";

class CountryAPI {
    private client : AxiosInstance  

    constructor(client: AxiosInstance) {
        this.client = client
    }

        async getCountry() {
            try {
                const path = '/all'
                const res = await this.client.get(path)
                const data = res.data
                const result = data
                
                return result                
            } catch (error) {
                console.error(error)
                
            }
        }
    }

    export default CountryAPI