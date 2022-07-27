import { Prisma } from '@prisma/client';

/*
Implementar o Prisma.<TABLENAME>CreateInput já retorna a estrutura SEM id para o DTO
Implementar o Prisma.<TABLENAME>UncheckedCreateInput já retorna a estrutura COM id para o DTO

DTO = Data Transfer Object / objeto de transferencia de dados

Exemplos:
export class Pokemon implements Prisma.PokemonCreateInput {}
export class Pokemon implements Prisma.PokemonUncheckedCreateInput {}
 */

export class Pokemon implements Prisma.PokemonUncheckedCreateInput {
  id: number;
  name: string;
  height: number | null;
  images: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
  types: Prisma.PokemonsOnTypesUncheckedCreateNestedManyWithoutPokemonInput;

}
