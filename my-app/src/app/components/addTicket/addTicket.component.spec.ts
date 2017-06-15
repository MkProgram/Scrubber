import {ComponentFixture, TestBed} from '@angular/core/testing';
import AddTicketComponent, {ITicket} from './addTicket.component';
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe('AddTicketComponent', () => {
  let component: AddTicketComponent;
  let fixture: ComponentFixture<AddTicketComponent>;

  beforeEach((done) => {
    (async () => {
      try {
        await TestBed.configureTestingModule({
          declarations: [AddTicketComponent],
          imports: [
            FormsModule
          ]
        })
          .compileComponents();
        done();
      } catch (e) {
        fail(e);
        done();
      }
    })();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTicketComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  it("should add a ticket", (done) => {
    (async () => {
      try {
        let ticket: ITicket;
        component.scbOnDone.subscribe((emittedTicket) => {
          ticket = emittedTicket;
        });

        let confirm = fixture.debugElement.query(By.css("[name=\"confirm\"]"));
        fixture.detectChanges();

        await fixture.whenRenderingDone();

        component.name = "Foo";
        component.description = "Bar";
        component.id = "12345678-1234-1234-1234-123456789012";
        fixture.detectChanges();

        await fixture.whenStable();

        confirm.triggerEventHandler("click", document.createEvent("MouseEvent"));

        fixture.detectChanges();
        await fixture.whenStable();

        expect(confirm.nativeElement.attributes.hasOwnProperty("disabled")).toBe(false);
        //noinspection JSUnusedAssignment
        expect(ticket).toEqual({
          name: "Foo",
          description: "Bar",
          id: "12345678-1234-1234-1234-123456789012",
        });
        done();
      } catch (e) {
        fail(e);
        done();
      }
    })();


  });

  it("should not add a ticket when provided values are invalid", (done) => {
    (async () => {
      try {
        let confirm = fixture.debugElement.query(By.css("[name=\"confirm\"]"));
        fixture.detectChanges();

        await fixture.whenRenderingDone();

        component.name = "";
        component.description = "";
        fixture.detectChanges();

        await fixture.whenStable();

        confirm.triggerEventHandler("click", document.createEvent("MouseEvent"));

        fixture.detectChanges();
        await fixture.whenStable();

        expect(confirm.nativeElement.attributes.hasOwnProperty("disabled")).toBe(true);
        done();
      } catch (e) {
        fail(e);
        done();
      }
    })();



  });
});
