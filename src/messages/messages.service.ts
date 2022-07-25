import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDTO } from './MessageDTO';

@Injectable()
export class MessagesService {
  public messages: Message[] = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  findAll() {
    return this.messages.filter(Boolean);
  }

  async findById(id: number) {
    //está validando se o ID é o mesmo ID que existe no array, porém valida também o tipo
    // ? safe operator, não avança a partir do msg se o msg for null
    const message = this.messages.find((msg) => msg?.id === id);

    if (!message) throw Error(`Mensagem com o ID ${id} não encontrada`);

    return message;
  }

  create(messageDto: MessageDTO) {
    const id = this.messages.length + 1;

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages.push(message);

    return this.messages;
  }

  async update(id: number, messageDto: MessageDTO) {
    const index = this.messages.findIndex((message) => message?.id === id);

    if (index < 0) throw Error(`Mensagem com o ID ${id} não encontrada`);

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages[index] = message;

    return message;
  }

  async delete(id: number) {
    const index = this.messages.findIndex((message) => message?.id === id);

    if (index < 0) throw Error(`Mensagem com o ID ${id} não encontrada`);

    delete this.messages[index];

    return true;
  }
}
