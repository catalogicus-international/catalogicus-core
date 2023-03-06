import { async, TestBed } from '@angular/core/testing';
import { FrontendCommonSharedUiUiKitModule } from './frontend-common-shared-ui-ui-kit.module';

describe('FrontendCommonSharedUiUiKitModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendCommonSharedUiUiKitModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(FrontendCommonSharedUiUiKitModule).toBeDefined();
  });
});
