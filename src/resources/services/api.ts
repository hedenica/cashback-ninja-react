import axios from 'axios'

// 'https://606467ecf0919700177859ac.mockapi.io/api/'

// 'http://localhost:3333'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})
