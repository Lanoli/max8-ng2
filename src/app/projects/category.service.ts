import { Injectable,EventEmitter } from '@angular/core'
import { Http, Response } from '@angular/http'
import { ICategory } from './category.model'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    private categoriesUrl = 'http://www.max8.be/api/categories.asp'

    constructor(private http: Http) {

    }

    getCategories(): Observable<ICategory[]> {
        return this.http.get(this.categoriesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.categories || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}