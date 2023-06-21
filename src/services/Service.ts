import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoal-cg9f.onrender.com'
})

    export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
        const resposta = await api.post(url, dados)
        setDado(resposta.data)
    }

    // /usuarios/logar
    export const login = async (url: any, dados: any, setDado: any) => {
        const resposta = await api.post(url, dados)
        setDado(resposta.data.token)
    }