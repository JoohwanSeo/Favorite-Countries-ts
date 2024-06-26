import axios, {AxiosInstance} from "axios"
import CountryAPI from "./countryApi"

const BASE_URL = 'https://restcountries.com/v3.1'    

class API {
    private client: AxiosInstance

    country

    constructor() {
        this.client = axios.create({baseURL: BASE_URL })

        this.country = new CountryAPI(this.client)
    }
}

const api = new API()

export default  api