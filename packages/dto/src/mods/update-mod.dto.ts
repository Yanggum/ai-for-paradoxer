import { PartialType } from '@nestjs/mapped-types';
import { CreateModDto } from './create-mod.dto';

export class UpdateModDto extends PartialType(CreateModDto) {}
