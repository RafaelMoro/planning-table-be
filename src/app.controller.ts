import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateOfferDto } from './dto/offers.dto';
import { AppService } from './app.service';
import { CreateAnswerDto } from './dto/answer.dto';

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

  @Get('offer/:offerName')
  getOffer(@Param('offerName') offerName: string) {
    return this.appService.getOffer(offerName);
  }

  @Post('answer')
  saveAnswer(@Body() payload: CreateAnswerDto) {
    return this.appService.saveAnswer(payload);
  }

  @Get('answer/:answerName')
  getAnswer(@Param('answerName') answerName: string) {
    return this.appService.getAnswer(answerName);
  }
}
