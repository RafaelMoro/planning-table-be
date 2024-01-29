import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOffer } from './dto/offers.dto';
import { generalResponse } from './constants';
import { GeneralResponse } from './interface';
import { CreateAnswer } from './dto/answer.dto';

@Injectable()
export class AppService {
  private offer: string;
  private answer: string;

  checkBeConnection(): string {
    return 'Planning table backend answering';
  }

  saveOffer(payload: CreateOffer) {
    const { offer: offerSent } = payload;
    this.offer = offerSent;
    const response: GeneralResponse = {
      ...generalResponse,
      message: 'Offer set',
    };
    return response;
  }

  getOffer() {
    if (!this.offer)
      throw new BadRequestException('Offer not set. Set it first');

    const response: GeneralResponse = {
      ...generalResponse,
      data: {
        offer: this.offer,
      },
    };
    return response;
  }

  saveAnswer(payload: CreateAnswer) {
    const { answer: answerSent } = payload;
    this.answer = answerSent;
    const response: GeneralResponse = {
      ...generalResponse,
      message: 'Answer set',
    };
    return response;
  }

  getAnswer() {
    if (!this.answer)
      throw new BadRequestException('Answer not set. Set it first');

    const response: GeneralResponse = {
      ...generalResponse,
      data: {
        answer: this.answer,
      },
    };
    return response;
  }
}
