import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  /*Trecho abstraido onde ao invés de retornar todos resultados de "images"
   * retorna apenas o campo "url" ocultando o campo de relação e o campo de ID */
  private readonly _include = {
    images: {
      select: {
        url:true,
      }
    },
    types: {
      select: {
        type: true
      },
    },
  };

  create(data: CreatePokemonDto) {
    return this.prisma.pokemon.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.pokemon.findMany({  include: this._include })
  }

  findOne(id: number) {
    return this.prisma.pokemon.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, data: UpdatePokemonDto) {
    return this.prisma.pokemon.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.pokemon.delete({
      where: { id },
    });
  }
}
