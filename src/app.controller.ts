import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOfferDto, UpdateOfferDto } from './dto/offers.dto';
import { AppService } from './app.service';
import { CreateAnswerDto, UpdateAnswerDto } from './dto/answer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  checkConnection() {
    return this.appService.checkBeConnection();
  }

  @Post('offer')
  saveOffer(@Body() payload: CreateOfferDto) {
    return this.appService.saveOffer(payload);
  }

  @Put('offer')
  updateOffer(@Body() payload: UpdateOfferDto) {
    return this.appService.updateOffer(payload);
  }

  @Delete('offer/:offerName')
  deleteOffer(@Param('offerName') offerName: string) {
    return this.appService.deleteOffer(offerName);
  }

  @Get('offer/:offerName')
  getOffer(@Param('offerName') offerName: string) {
    return this.appService.getOffer(offerName);
  }

  @Post('answer')
  saveAnswer(@Body() payload: CreateAnswerDto) {
    return this.appService.saveAnswer(payload);
  }

  @Put('answer')
  updateAnswer(@Body() payload: UpdateAnswerDto) {
    return this.appService.updateAnswer(payload);
  }

  @Delete('answer/:answerName')
  deleteAnswer(@Param('answerName') answerName: string) {
    return this.appService.deleteAnswer(answerName);
  }

  @Get('answer/:answerName')
  getAnswer(@Param('answerName') answerName: string) {
    return this.appService.getAnswer(answerName);
  }
}
