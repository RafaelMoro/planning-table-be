import { Test, TestingModule } from '@nestjs/testing';
import { AccountRecordsService } from './records.service';

describe('RecordsService', () => {
  let service: AccountRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountRecordsService],
    }).compile();

    service = module.get<AccountRecordsService>(AccountRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
