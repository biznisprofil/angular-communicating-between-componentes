import { Component } from "@angular/core";

import { MessageService, EmitService } from "../_services/index";
import { Subscription } from "rxjs";

@Component({ templateUrl: "about.component.html" })
export class AboutComponent {
  subscription: Subscription;
  message: string;

  constructor(
    private messageService: MessageService,
    private emitService: EmitService
  ) {
    console.log("constructor about");
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log("message", message);
      this.message = message;
    });
    // this.subscription = this.emitService
    //   .getChangeEmitter()
    //   .subscribe((message: any) => {
    //     console.log("message", message);
    //     this.message = message;
    //   });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
