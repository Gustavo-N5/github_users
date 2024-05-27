import { Repositorio } from "./repositorio";

export interface Usuario {
    login:string
    avatar_url: string;
    followers:number;
    following:number;
    name:string;
    bio:string;
    location: string
    twitter_username:string
    company:string;
    email:string;
    blog:string;
    repositorios:Repositorio[];
}
