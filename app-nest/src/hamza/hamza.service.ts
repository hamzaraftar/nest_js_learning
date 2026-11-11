import { Injectable } from '@nestjs/common';
import { CreateHamzaDto } from './dto/create-hamza.dto.js';
import { UpdateHamzaDto } from './dto/update-hamza.dto.js';

@Injectable()
export class HamzaService {
  create(createHamzaDto: CreateHamzaDto) {
    return 'This action adds a new hamza';
  }

  findAll() {
    return `This action returns all hamza`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hamza`;
  }

  update(id: number, updateHamzaDto: UpdateHamzaDto) {
    return `This action updates a #${id} hamza`;
  }

  remove(id: number) {
    return `This action removes a #${id} hamza`;
  }
}
