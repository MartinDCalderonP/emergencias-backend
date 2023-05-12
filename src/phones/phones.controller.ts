import { Controller, Body, Patch, Param } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('phones')
@ApiTags('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Patch('/phoneId=:phoneId')
  updatePhone(
    @Param('phoneId') id: string,
    @Body() updatePhoneDto: UpdatePhoneDto,
  ) {
    return this.phonesService.updatePhone(id, updatePhoneDto);
  }
}
