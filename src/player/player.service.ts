import { Injectable } from '@nestjs/common';
import { CreatePlayerDTO } from './dto/createPlayer.dto';
import { Player } from './interface/player.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PlayerService {
  // mocking
  create(CreatePlayerDTO: CreatePlayerDTO): Player {
    const { name, phone, email } = CreatePlayerDTO;

    const player: Player = {
      id: uuidv4(),
      name,
      phone,
      email,
      ranking: '',
      rankingPosition: 0,
      photo: '',
    };

    return player;
  }
}
