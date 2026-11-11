import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HamzaService } from './hamza.service.js';
import { CreateHamzaDto } from './dto/create-hamza.dto.js';
import { UpdateHamzaDto } from './dto/update-hamza.dto.js';

@Controller('hamza')
export class HamzaController {
  constructor(private readonly hamzaService: HamzaService) {}

  @Post()
  create(@Body() createHamzaDto: CreateHamzaDto) {
    return this.hamzaService.create(createHamzaDto);
  }

  @Get()
  findAll() {
    return this.hamzaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hamzaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHamzaDto: UpdateHamzaDto) {
    return this.hamzaService.update(+id, updateHamzaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hamzaService.remove(+id);
  }
}
