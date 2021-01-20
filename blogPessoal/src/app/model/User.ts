import { Postagem } from "./Postagem"

export class User {
    public id: number /*Adicionar no tsconfig.json: "strictPropertyInitialization": false,*/
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public tipo: string
    public postagem: Postagem[]
}