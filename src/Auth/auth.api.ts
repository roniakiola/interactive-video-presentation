import { Axios, AxiosRequestConfig } from "axios"


export const CorrectUsername="kek"
export const CorrectPassword="lol"

export interface Credentials{
    username: string;
    password: string;
}

export const onLogin = async(data: Credentials)=>{
    const requestConfig: AxiosRequestConfig ={
        method: 'post',
        url: process.env.REACT_API_BASE_URL + '/login',
        data
    }

}