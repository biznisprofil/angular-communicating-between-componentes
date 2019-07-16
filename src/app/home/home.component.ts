import { Component } from "@angular/core";

import { MessageService } from "../_services/index";
import { EmitService } from "../_services/index";
import { Router } from "@angular/router";

@Component({ templateUrl: "home.component.html" })
export class HomeComponent {
  constructor(
    private messageService: MessageService,
    private router: Router,
    private emitService: EmitService
  ) {}

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.changeGlobalMessage(
      "Message from Home Component to App Component!"
    );

    // this.emitService.emitChangeEvent(
    //   "Message from Home Component to App Component!"
    // );

    this.router.navigate(["/about"]);
  }

  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }
}
