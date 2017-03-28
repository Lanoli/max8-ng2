import { Injectable,EventEmitter } from '@angular/core'
import { Http, Response } from '@angular/http'
import { IProject } from './index'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {
    private projectUrl = 'http://www.max8.be/api/Project.asp'

    constructor(private http: Http) {

    }

    getProject(id: number): Observable<IProject>{
        return this.http.get(`${this.projectUrl}?id=${id}`)
            .map(res => res.json());
    }

    getProjects(): Observable<IProject[]> {
        return this.http.get(this.projectUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.projects || {};
    }
    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
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