import { PartialType } from '@nestjs/mapped-types';
import { CreateNationalFocusDto } from './create-national-focus.dto';

export class UpdateNationalFocusDto extends PartialType(CreateNationalFocusDto) {}
