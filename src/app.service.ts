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
  private answer: string;

  checkBeConnection(): string {
    return 'Planning table backend answering';
  }

  hasWhiteSpace(offerName: string) {
    return offerName.indexOf(' ') >= 0;
  }

  async saveOffer(payload: CreateOfferDto) {
    try {
      if (this.hasWhiteSpace(payload.offerName))
        throw new BadRequestException('Offer name cannot have white spaces');

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
  }

  async getOffer(offerName: string) {
    try {
      const offerFound = await this.offerModel.find({ offerName }).exec();
      if (!offerFound) throw new BadRequestException('Offer not found');

      const response: GeneralResponse = {
        ...generalResponse,
        data: {
          offer: offerFound,
        },
      };
      return response;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
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
