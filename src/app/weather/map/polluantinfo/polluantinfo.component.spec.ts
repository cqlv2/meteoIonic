import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolluantinfoComponent } from './polluantinfo.component';

describe('PolluantinfoComponent', () => {
  let component: PolluantinfoComponent;
  let fixture: ComponentFixture<PolluantinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolluantinfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolluantinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
