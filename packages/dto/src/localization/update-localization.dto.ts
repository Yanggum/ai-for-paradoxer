import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalizationDto } from './create-localization.dto';

export class UpdateLocalizationDto extends PartialType(CreateLocalizationDto) {}
