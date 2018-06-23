import { TransfersModule } from './transfers.module';

describe('TransfersModule', () => {
  let transfersModule: TransfersModule;

  beforeEach(() => {
    transfersModule = new TransfersModule();
  });

  it('should create an instance', () => {
    expect(transfersModule).toBeTruthy();
  });
});
