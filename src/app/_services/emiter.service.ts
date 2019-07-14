import { EventEmitter, Injectable } from "@angular/core";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class EmitService {
  change: EventEmitter<any> = new EventEmitter();
  constructor() {}

  emitChangeEvent(message: any) {
    const eventStream = of(null);
    eventStream
      .pipe(delay(100))
      .subscribe(() => this.change.emit({ text: message }));
  }

  getChangeEmitter() {
    return this.change;
  }
}
