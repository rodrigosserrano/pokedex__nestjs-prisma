import { IsString, IsNotEmpty } from 'class-validator';
//Validação se o campo está vindo da forma esperada
export class MessageDTO {
  @IsString()
  @IsNotEmpty()
  text: string;
}
