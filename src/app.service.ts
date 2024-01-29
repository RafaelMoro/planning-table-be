import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOffer } from './dto/offers.dto';
import { generalResponse } from './constants';
import { GeneralResponse } from './interface';

@Injectable()
export class AppService {
  private offer: string;

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
}
