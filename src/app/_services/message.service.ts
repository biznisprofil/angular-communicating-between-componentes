import { Injectable } from "@angular/core";
import { Observable, Subject, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class MessageService {
  private subject = new Subject<any>();
  globalMessage = "";

  sendMessage(message: any = null) {
    const eventStream = of(null);
    eventStream
      .pipe(delay(100))
      .subscribe(() => this.subject.next({ text: message }));
  }

  changeGlobalMessage(message: string) {
    this.globalMessage = message;
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getPromiseMessage(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.globalMessage !== "") {
        resolve(this.globalMessage);
      } else {
        reject({
          error: "error"
        });
      }
    });
  }
}
