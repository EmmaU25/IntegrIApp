import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyMailPage } from './verify-mail.page';

describe('VerifyMailPage', () => {
  let component: VerifyMailPage;
  let fixture: ComponentFixture<VerifyMailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyMailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
