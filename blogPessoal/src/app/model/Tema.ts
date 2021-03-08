  
import { Postagem } from './Postagem';

export class Tema{
  public id: number
  public descricao: string
  public postagem: Postagem[]
  public foto: string
  public fraqueza: string
  public resistencia: string
}