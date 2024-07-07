import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AccountRecord } from '../records.entity';
import { Model } from 'mongoose';
import { CreateAccountRecordDto } from '../records.dto';

@Injectable()
export class AccountRecordsService {
  constructor(
    @InjectModel(AccountRecord.name) private recordModel: Model<AccountRecord>,
  ) { }

  async createRecord(payload: CreateAccountRecordDto) {
    try {
      const newRecord = new this.recordModel(payload);
      const modelSaved = await newRecord.save();
      return modelSaved;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
