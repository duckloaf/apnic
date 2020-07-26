import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ApnicService {
    constructor(
        private http: HttpClient
    ) { }

    apihost: string = 'https://academy.apnic.net/wp-json/academy/virtual-labs';

    getCourses(): Observable<any> {
        return this.http.get(this.apihost)
        .pipe(
            //tap( data => console.log(data), error => console.error(error) ),
            catchError(this.handleError),
        );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error.message);
        return Promise.reject(error.message || error);
    }
 
}