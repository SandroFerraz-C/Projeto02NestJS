import { Injectable } from '@nestjs/common';

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
}
