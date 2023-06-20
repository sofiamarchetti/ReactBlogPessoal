import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoal-cg9f.onrender.com'
})

// /usuarios/logar
export const Login = async (url, dados, setDado) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}