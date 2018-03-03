import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { RemoteServiceBase } from "./remote-service-base";
import { Category } from "../models/category";
import { Question } from "../models/question";
import 'rxjs/add/operator/map';
import * as moment from 'moment';



@Injectable()
export class QuestionsService extends RemoteServiceBase {

    apiUrl: string = this.apiBaseUrl + '/api/faq/';

    constructor(http: HttpClient) {
        super(http);
    }

    saveQuestion(question: Question): Observable<Question>{
        return this.http.post<Question>(this.apiUrl, question, this.httpOptions);
    }

    getAllQuestions(): Observable<Array<Question>>{
        return this.http.get<Array<Question>>(this.apiUrl, this.httpOptions).map((questions) => {
            for(let i=0;i<questions.length;i++){
                questions[i].createdAt = moment(questions[i].createdAt);
            }
            return questions;
        });
    }
    
}