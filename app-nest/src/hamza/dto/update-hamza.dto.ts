import { PartialType } from '@nestjs/mapped-types';
import { CreateHamzaDto } from './create-hamza.dto.js';

export class UpdateHamzaDto extends PartialType(CreateHamzaDto) {}
