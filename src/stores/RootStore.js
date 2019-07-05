import { configure } from "mobx";
import Transport from "./Transport";

export default class RootStore {
  constructor() {
    configure({ enforceActions: "always" });
    this.Transport = new Transport();
  }
}
