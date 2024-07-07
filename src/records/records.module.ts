import { Module } from '@nestjs/common';
import { RecordsController } from './controllers/records.controller';
import { AccountRecordsService } from './services/records.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountRecord, AccountRecordSchema } from './records.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AccountRecord.name,
        schema: AccountRecordSchema,
      },
    ]),
  ],
  controllers: [RecordsController],
  providers: [AccountRecordsService],
})
export class RecordsModule { }
