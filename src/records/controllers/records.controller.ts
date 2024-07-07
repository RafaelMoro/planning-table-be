import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AccountRecordsService } from '../services/records.service';
import { CreateAccountRecordDto } from '../records.dto';

@Controller('records')
export class RecordsController {
  constructor(private recordsService: AccountRecordsService) {}

  @Post()
  createRecord(@Body() payload: CreateAccountRecordDto) {
    return this.recordsService.createRecord(payload);
  }

  @Get()
  getRecords() {
    return this.recordsService.getRecords();
  }

  @Delete()
  deleteRecord(@Body() payload: { recordId: string }) {
    return this.recordsService.deleteRecord(payload.recordId);
  }
}
