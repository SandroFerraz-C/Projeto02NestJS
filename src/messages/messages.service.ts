import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages = [
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
}
