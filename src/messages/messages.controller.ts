import { Body } from '@nestjs/common';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { create } from 'domain';
import { Message } from './message';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService){
    
  }
  
  @Get()
  findAll(){
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params){
    return this.messagesService.findById(+params.id);
  }  

  @Post()
    create(@Body() message:Message){
      return this.messagesService.create(message);
 
  }
}
