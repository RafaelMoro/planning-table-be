import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Budgets } from '../budgets.entity';
import { Model } from 'mongoose';
import { CreateBudgetDto } from '../budgets.dto';

@Injectable()
export class BudgetsService {
  constructor(@InjectModel(Budgets.name) private budgetModel: Model<Budgets>) {}

  async createBudget(payload: CreateBudgetDto) {
    try {
      const newRecord = new this.budgetModel(payload);
      const modelSaved = await newRecord.save();
      return modelSaved;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getBudgets() {
    try {
      const budgets = await this.budgetModel.find().exec();
      return budgets;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
