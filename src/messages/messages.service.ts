import { Injectable } from '@nestjs/common';
import {MessageDto} from './MessageDto';


export interface Message{
  id: number;
  text: string;
}

@Injectable()
export class MessagesService {
  
  private messages: Message[] = [
    {
      id:1,
      text: "Priemira Mensagem",
    },
    {
      id:2,
      text: "Segunda Mensagem",
    },
  ];

  findAll(){
    return this.messages;
  }

  findById(id:number){
    return this.messages.find(message => message.id === id);
  }

  create(message: Message) {
    return this.messages.push(message);
  }

  async update(id: number, messageDto : MessageDto){
    const index = this.messages.findIndex((msg) =>msg?.id === id);

    if(index < 0 ){
      throw Error(`Mensagem dom o ID 'S{id}' não encontrada.`);
    }

    const message: Message = {
      id,
      ...messageDto,
    };
    this.messages[index] = message;
    return message;
  }

}
