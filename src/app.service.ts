import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateOfferDto } from './dto/offers.dto';
import { generalResponse } from './constants';
import { GeneralResponse } from './interface';
import { CreateAnswerDto } from './dto/answer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Offer } from './entities/offers.entity';
import { Answer } from './entities/answers.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Offer.name) private offerModel: Model<Offer>,
    @InjectModel(Answer.name) private answerModel: Model<Answer>,
  ) {}

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
      if (offerFound.length === 0)
        throw new BadRequestException('Offer not found');

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

  async saveAnswer(payload: CreateAnswerDto) {
    try {
      if (this.hasWhiteSpace(payload.answerName))
        throw new BadRequestException('Offer name cannot have white spaces');

      const newModel = new this.answerModel(payload);
      const model = await newModel.save();
      const response: GeneralResponse = {
        ...generalResponse,
        message: 'Answer se',
        data: {
          answer: model,
        },
      };
      return response;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async getAnswer(answerName: string) {
    try {
      const answerFound = await this.answerModel.find({ answerName }).exec();
      console.log('answer found', answerFound);
      if (answerFound.length === 0)
        throw new BadRequestException('Answer not found');

      const response: GeneralResponse = {
        ...generalResponse,
        data: {
          offer: answerFound,
        },
      };
      return response;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
