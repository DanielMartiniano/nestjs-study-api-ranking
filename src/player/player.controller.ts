import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDTO } from './dto/createPlayer.dto';
import { Player } from './interface/player.interface';
import { PlayerService } from './player.service';

@Controller('api/v1/player')
export class PlayerController {
  constructor(private readonly PlayerService: PlayerService) {}

  @Post()
  async create(@Body() player: CreatePlayerDTO): Promise<Player> {
    return this.PlayerService.create(player);
  }
}
