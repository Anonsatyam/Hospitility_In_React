import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '5228768583msh0643281c1edb30fp18113fjsnfb20b29f0ba0',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    }); 
    return data;
}