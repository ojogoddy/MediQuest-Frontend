import axios from 'axios'

const Instance = axios.create({
    baseURL : "http://localhost:4500/api/v1"
})

export default Instance