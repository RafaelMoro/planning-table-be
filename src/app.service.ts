import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateOfferDto } from './dto/offers.dto';
import { generalResponse } from './constants';
import { GeneralResponse } from './interface';
import { CreateAnswer } from './dto/answer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Offer } from './entities/offers.entity';

@Injectable()
export class AppService {
  constructor(@InjectModel(Offer.name) private offerModel: Model<Offer>) {}
  private offer: string;
  private answer: string;

  checkBeConnection(): string {
    return 'Planning table backend answering';
  }

  async saveOffer(payload: CreateOfferDto) {
    try {
      const newModel = new this.offerModel(payload);
      const model = await newModel.save();
      const response: GeneralResponse = {
        ...generalResponse,
        message: 'Offer set',
        data: {
          offer: model,
        },
      };
      return response;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
    // const { offer: offerSent } = payload;
    // this.offer = offerSent;
    // const response: GeneralResponse = {
    //   ...generalResponse,
    //   message: 'Offer set',
    // };
    // return response;
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
