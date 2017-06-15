import {ComponentFixture, TestBed} from '@angular/core/testing';
import AddTicketComponent, {ITicket} from './addTicket.component';
import {FormsModule} from "@angular/forms";
import { By } from "@angular/platform-browser";
import PrioritiesProvider from "../../injectables/priorities/priorities.service";
import PrioritiesProviderMock from "../../injectables/priorities/priorities.service.mock";

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
          ],
          providers: [{
            provide: PrioritiesProvider,
            useClass: PrioritiesProviderMock
          }]
        }).compileComponents();
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

  fit("should add a ticket", (done) => {
    (async () => {
      try {
        let ticket: ITicket;
        component.scbOnDone.subscribe((emittedTicket) => {
          ticket = emittedTicket;
        });

        let confirm = fixture.debugElement.query(By.css(`button[type="submit"]`));
        console.log(confirm);
        fixture.detectChanges();

        await fixture.whenRenderingDone();

        component.name = "Foo";
        component.description = "Bar";
        component.id = "12345678-1234-1234-1234-123456789012";
        component.priority = component.prioritiesService.priorities.find(priority => priority.value === "MEDIUM");
        component.visibility = "public";
        fixture.detectChanges();

        console.log(fixture.isStable());

        await fixture.whenStable();
        await fixture.whenRenderingDone();
        console.log(fixture.isStable());
        for(let att of confirm.nativeElement.attributes) {
          console.log(att);
        }

        confirm.triggerEventHandler("click", document.createEvent("MouseEvent"));

        fixture.detectChanges();
        await fixture.whenStable();
        await fixture.whenRenderingDone();
        for(let att of confirm.nativeElement.attributes) {
          console.log(att);
        }
        expect(confirm.nativeElement.attributes.hasOwnProperty("disabled")).toBe(false);

        //noinspection JSUnusedAssignment
        expect(ticket).toEqual({
          title: "Foo",
          description: "Bar",
          id: "12345678-1234-1234-1234-123456789012",
          user: "00000000-0000-0000-0000-000000000000",
          priority: component.prioritiesService.priorities.find(priority => priority.value === "MEDIUM").id,
          private: false
        });
        done();
      } catch (e) {
        fail(e);
        done();
      }
    })();

  });

  it("should not add a ticket when provided with invalid values", (done) => {
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
