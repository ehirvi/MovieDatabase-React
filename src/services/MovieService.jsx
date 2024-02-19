import axios from 'axios'

const REST_URL = 'http://localhost:8080/api'

const getAll = () => (
  axios
    .get(`${REST_URL}/movies`)
    .then(promise => promise.data)
)

const getOne = (id) => (
  axios
    .get(`${REST_URL}/movies/${id}`)
    .then(promise => promise.data)
)


export default { getAll, getOne }