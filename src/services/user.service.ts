import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../environments/environment';
import { map } from "rxjs/operators";
import { event } from "../models/event.model";
import { recruitment } from "../models/recruitment.model";


@Injectable()
export class UserService {



    constructor(private httpClient: HttpClient) { }

    
    public PostRecruitment(recruitment: recruitment): Observable<recruitment> {

        return this.httpClient.post(environment.addrecruitment, recruitment)
            .pipe(map((c: recruitment) => c));

    }


    public PostEvent(event: event): Observable<event> {

        return this.httpClient.post(environment.addevent, event)
            .pipe(map((c: event) => c));

    }


    public GetEvents(): Observable<event[]> {

        return this.httpClient.get(environment.eventlist)
            .pipe(map((c: event[]) => c.map(cl => cl)));

    }



    public GetEventById(id: string): Observable<any> {

        return this.httpClient.get(environment.geteventbyid +"/"+ id);
    }



    public PutFeedback(eventId: string, feedback:string): Observable<any> {
        return this.httpClient.get(environment.putfeedback+"/"+ eventId+"/"+ feedback);

    }




    public GetRecruitments(): Observable<recruitment[]> {

        return this.httpClient.get(environment.recruitmentlist)
            .pipe(map((c: recruitment[]) => c.map(cl => cl)));

    }


}