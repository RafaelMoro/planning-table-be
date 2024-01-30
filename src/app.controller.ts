import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOfferDto } from './dto/offers.dto';
import { AppService } from './app.service';
import { CreateAnswer } from './dto/answer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  checkConnection(): string {
    return this.appService.checkBeConnection();
  }

  @Post('offer')
  saveOffer(@Body() payload: CreateOfferDto) {
    return this.appService.saveOffer(payload);
  }

  @Get('offer')
  getOffer() {
    return this.appService.getOffer();
  }

  @Post('answer')
  saveAnswer(@Body() payload: CreateAnswer) {
    return this.appService.saveAnswer(payload);
  }

  @Get('answer')
  getAnswer() {
    return this.appService.getAnswer();
  }
}
