import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketComponent } from './ticket.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TicketComponent
      ],
      imports: [
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should expand when clicked', (done) => {
    (async () => {
      let p = fixture.debugElement.query(By.css('p'));
      expect(p).toBeFalsy();
      fixture.debugElement.query(By.css('div')).triggerEventHandler('click', document.createEvent('MouseEvent'));
      fixture.detectChanges();
      await fixture.whenStable();
      p = fixture.debugElement.query(By.css('p'));
      expect(p).toBeTruthy();
    })().then(done, fail);
  });
});
