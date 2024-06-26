export type CountriesInfo = {
    name:{
        common: string;
        official: string
    }

    capital: string[]

    flags: {
        png: string,
        svg: string
    },

    checked: boolean
}  