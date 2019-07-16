import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class MessageResolver implements Resolve<any> {
    constructor(private messageService: MessageService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.messageService.getMessage();
    }
}

