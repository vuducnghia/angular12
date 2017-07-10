import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/map';
/**
* This class provides the Contact service with methods to read names and add names.
*/
@Injectable()
export class ContactService {
/**
* Creates a new ContactService with the injected Http.
* @param {Http} http - The injected Http.
* @constructor
*/
    constructor(private http: Http) {}
/**
* Returns an Observable for the HTTP GET request for the JSON resource.
* @return {string[]} The Observable for the HTTP request.
*/
    private url="https://5962fc1845492d0011f6b74e.mockapi.io/api/person/";

    get(): Observable<any[]> {
        return this.http.get(this.url)
        .map((res: Response) => res.json())
        //              .do(data => console.log('server data:', data))  // debug
        .catch(this.handleError);
    }

    xem(id:number):Observable<any>{
        return this.http.get(this.url+id)
        .map((respon:Response)=>respon.json())
        .catch(this.handleError);
    }

    sua(id:number, data:any): Observable<any>{
        return this.http.put(this.url+id,data)
        .map((respon:Response)=>respon.json())
        .catch(this.handleError);
    }
    
    them(data:any): Observable<any>{
        return this.http.post(this.url,data)
        .map((respon:Response)=>respon.json())
        .catch(this.handleError);
    }

    xoa(id:number):Observable<any>{
        return this.http.delete(this.url+id)
        .map((respon:Response)=>respon.json())
        .catch(this.handleError);
    }
    
    search(key:string):Observable<any[]>{
        return this.http.get(this.url+"?search="+key)
        .map((respon:Response)=>respon.json())
        .catch(this.handleError);
    }
/**
* Handle HTTP error
*/
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `error.status - error.statusText` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}