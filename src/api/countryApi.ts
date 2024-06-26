import {AxiosInstance } from "axios";
import { CountriesInfo } from "../types/country.type";

class CountryAPI {
    private client : AxiosInstance  

    constructor(client: AxiosInstance) {
        this.client = client
    }

        async getCountry() {
            try {
                const path = '/all'
                const res = await this.client.get<CountriesInfo[]>(path)
                const data = res.data
                const result = data
                
                return result                
            } catch (error) {
                console.error(error)
                
            }
        }
    }

    export default CountryAPI