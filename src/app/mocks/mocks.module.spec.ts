import { MocksModule } from './mocks.module';

describe('MocksModule', () => {
  let mocksModule: MocksModule;

  beforeEach(() => {
    mocksModule = new MocksModule();
  });

  it('should create an instance', () => {
    expect(mocksModule).toBeTruthy();
  });
});
