import { Component } from "@angular/core";

import { MessageService, EmitService } from "../_services/index";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({ templateUrl: "about.component.html" })
export class AboutComponent {
  subscription: Subscription;
  message = {
    text: ""
  };

  constructor(
    private messageService: MessageService,
    private emitService: EmitService,
    private actr: ActivatedRoute
  ) {
    console.log("constructor about");
    // subscribe to home component messages
    // this.subscription = this.messageService.getMessage().subscribe(message => {
    //   console.log("message", message);
    //   this.message = message;
    // });
    // this.subscription = this.emitService
    //   .getChangeEmitter()
    //   .subscribe((message: any) => {
    //     console.log("message", message);
    //     this.message = message;
    //   });

    this.message.text = this.actr.snapshot.data["message"];
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
