import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AccountRecord } from '../records.entity';
import { Model } from 'mongoose';
import { CreateAccountRecordDto } from '../records.dto';

@Injectable()
export class AccountRecordsService {
  constructor(
    @InjectModel(AccountRecord.name) private recordModel: Model<AccountRecord>,
  ) {}

  async createRecord(payload: CreateAccountRecordDto) {
    try {
      const newRecord = new this.recordModel(payload);
      const modelSaved = await newRecord.save();
      return modelSaved;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getRecords() {
    try {
      const records = await this.recordModel.find().populate('budget').exec();
      return records;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteRecord(id: string) {
    try {
      const record = await this.recordModel.findByIdAndDelete(id).exec();
      return record;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
