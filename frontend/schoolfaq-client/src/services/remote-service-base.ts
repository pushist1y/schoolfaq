import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class RemoteServiceBase {
    constructor(protected http: HttpClient) {

    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    protected apiBaseUrl: string = "http://localhost:5000";

    // startRemoteProcess(args: IRemoteProcessSericeStartArgs): Observable<TaskDescriptorBase> {
    //     let url = this.apiUrl;
    //     return this.http.post<ParseTaskDescriptor>(url, args.descriptor, this.httpOptions);
    // }

    // updateRemoteProcess(guid: string): Observable<TaskDescriptorBase> {
    //     let url = this.apiUrl + guid;
    //     return this.http.get<ParseTaskDescriptor>(url);
    // }

    // cancelRemoteProcess(guid: string): Observable<TaskDescriptorBase> {
    //     let url = this.apiUrl + guid;
    //     return this.http.delete<ParseTaskDescriptor>(url);
    // }

}