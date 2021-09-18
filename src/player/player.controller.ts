import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDTO } from './dto/createPlayer.dto';

@Controller('api/v1/player')
export class PlayerController {
  @Post()
  async create(@Body() player: CreatePlayerDTO): Promise<string> {
    console.log(player);
    return JSON.stringify(player);
  }
}
