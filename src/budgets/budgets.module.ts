import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetsController } from './controller/budgets.controller';
import { BudgetsService } from './services/budgets.service';
import { Budgets, BudgetsSchema } from './budgets.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Budgets.name,
        schema: BudgetsSchema,
      },
    ]),
  ],
  controllers: [BudgetsController],
  providers: [BudgetsService],
})
export class BudgetsModule {}
