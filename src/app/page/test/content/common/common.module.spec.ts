import { LCommonModule } from './common.module';

describe('CommonModule', () => {
  let commonModule: LCommonModule;

  beforeEach(() => {
    commonModule = new LCommonModule();
  });

  it('should create an instance', () => {
    expect(commonModule).toBeTruthy();
  });
});
