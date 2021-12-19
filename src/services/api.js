import axios from 'axios'

const api = axios.create({
	baseURL: 'https://meuapp.melbravin1234.repl.co'
})

export default api;