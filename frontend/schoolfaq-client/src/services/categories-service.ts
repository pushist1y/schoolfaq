import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { RemoteServiceBase } from "./remote-service-base";
import { Category } from "../models/category";



@Injectable()
export class CategoriesService extends RemoteServiceBase {

    apiUrl: string = this.apiBaseUrl + '/api/cat/';

    constructor(http: HttpClient) {
        super(http);
    }

    getCategories(): Observable<Array<Category>> {
        let url = this.apiUrl;
        return this.http.get<Array<Category>>(url, this.httpOptions);
    }
    
}