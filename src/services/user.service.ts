import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../environments/environment';
import { map } from "rxjs/operators";
import { event } from "../models/event.model";


@Injectable()
export class UserService {



    constructor(private httpClient: HttpClient) { }



    public PostEvent(event: event): Observable<event> {

        return this.httpClient.post(environment.addevent, event)
            .pipe(map((c: event) => c));

    }




}