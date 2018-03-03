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

    saveQuestion(question: Question): Observable<Question> {
        return this.http.post<Question>(this.apiUrl, question, this.httpOptions);
    }

    getAllQuestions(order?: string): Observable<Array<Question>> {
        let url = this.apiUrl;
        if(order){
            url += "?order=" + order;
        }
        return this.http.get<Array<Question>>(url, this.httpOptions).map((questions) => {
            for (let i = 0; i < questions.length; i++) {
                questions[i].createdAt = moment(questions[i].createdAt);
                if (questions[i].answerDate) {
                    questions[i].answerDate = moment(questions[i].answerDate);
                }

            }
            return questions;
        });
    }

    answerQuestion(answeredQuestion: Question): Observable<Question> {
        let url = this.apiUrl + "answer/" + answeredQuestion.id;
        return this.http.post<Question>(url, answeredQuestion, this.httpOptions);
    }

    deleteQuestion(id: number): Observable<void> {
        return this.http.delete<void>(this.apiUrl + id.toString());
    }

    upvote(questionId: number): Observable<number> {
        let url = this.apiUrl + "upvote/" + questionId.toString();
        return this.http.post<Question>(url, this.httpOptions).map((question) => question.likesCount);
    }

    downvote(questionId: number): Observable<number> {
        let url = this.apiUrl + "downvote/" + questionId.toString();
        return this.http.post<Question>(url, this.httpOptions).map((question) => question.dislikesCount);
    }

}