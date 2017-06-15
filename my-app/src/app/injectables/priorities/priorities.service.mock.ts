import {IPrioritiesProvider, IPriority} from "./priorities.service";

export default class PrioritiesProviderMock implements IPrioritiesProvider {

  public priorities: Array<IPriority>;

  constructor() {
    this.priorities = [{
      id: "0fd501eb-3009-42d3-a3a5-7b9b16c94102",
      displayValue: "niedrig",
      value: "LOW"
    }, {
      id: "3ed826e0-120f-4a4c-9f31-97303b16ed01",
      displayValue: "mittel",
      value: "MEDIUM"
    }, {
      id: "35b85ffb-4e70-4465-b1ea-695bc6fc8915",
      displayValue: "hoch",
      value: "HIGH"
    }, {
      id: "3e671151-9b39-407d-a9a2-95d05858e50a",
      displayValue: "dringend",
      value: "URGENT"
    }]
  }
}
