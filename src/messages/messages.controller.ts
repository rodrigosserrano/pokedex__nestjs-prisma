import {
  Controller,
  NotFoundException,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './Message';
import { MessageDTO } from './MessageDTO';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id) {
    //Está recebendo uma string
    // console.log(params.id, typeof params.id);
    //colocando um '+' entende que é um number
    // return this.messagesService.findById(+params.id)
    return this.messagesService.findById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDTO) {
    return this.messagesService.create(messageDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id, @Body() messageDto: Message) {
    return this.messagesService.update(id, messageDto).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id) {
    return this.messagesService.delete(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
