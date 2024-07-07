import { Body, Controller, Get, Post } from '@nestjs/common';
import { BudgetsService } from '../services/budgets.service';
import { CreateBudgetDto } from '../budgets.dto';

@Controller('budgets')
export class BudgetsController {
  constructor(private budgetService: BudgetsService) {}

  @Post()
  createBudget(@Body() payload: CreateBudgetDto) {
    return this.budgetService.createBudget(payload);
  }

  @Get()
  getBudgets() {
    return this.budgetService.getBudgets();
  }
}
