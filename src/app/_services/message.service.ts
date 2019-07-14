import { Injectable } from "@angular/core";
import { Observable, Subject, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class MessageService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
    const eventStream = of(null);
    eventStream
      .pipe(delay(100))
      .subscribe(() => this.subject.next({ text: message }));
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
