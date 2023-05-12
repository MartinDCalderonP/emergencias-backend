import { Controller, Body, Patch, Param } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Patch('/addressId=:addressId')
  updateAddress(
    @Param('addressId') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return this.addressesService.updateAddress(id, updateAddressDto);
  }
}
