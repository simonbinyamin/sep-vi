import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../environments/environment';
import { map } from "rxjs/operators";
import { event } from "../models/event.model";
import { recruitment } from "../models/recruitment.model";
import { user } from 'src/models/user.model';
import { financial } from 'src/models/financial.model';


@Injectable()
export class UserService {



    constructor(private httpClient: HttpClient) { }


    public PostLogin(user: user): Observable<user> {

        return this.httpClient.post(environment.loginuser, user)
            .pipe(map((c: user) => c));

    }

    
    public PostRecruitment(recruitment: recruitment): Observable<recruitment> {

        return this.httpClient.post(environment.addrecruitment, recruitment)
            .pipe(map((c: recruitment) => c));

    }
    public PostFinancial(financial: financial): Observable<financial> {

        return this.httpClient.post(environment.addfinancial, financial)
            .pipe(map((c: financial) => c));

    }

    public PostEvent(event: event): Observable<event> {

        return this.httpClient.post(environment.addevent, event)
            .pipe(map((c: event) => c));

    }
    public GetJob(recruitment: recruitment): Observable<recruitment> {

        return this.httpClient.post(environment.getjob, recruitment)
            .pipe(map((c: recruitment) => c));

    }

    public GetFinancial(financial: financial): Observable<financial> {

        return this.httpClient.post(environment.getfinancial, financial)
            .pipe(map((c: financial) => c));

    }
    public GetEvent(event: event): Observable<event> {

        return this.httpClient.post(environment.getevent, event)
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