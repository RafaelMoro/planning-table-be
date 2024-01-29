import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOffer } from './dto/offers.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  checkConnection(): string {
    return this.appService.checkBeConnection();
  }

  @Post('offer')
  saveOffer(@Body() payload: CreateOffer) {
    return this.appService.saveOffer(payload);
  }

  @Get('offer')
  getOffer() {
    return this.appService.getOffer();
  }
}
