import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dd9eab8b42da4784b6b145f95e9a2039'
    }
})