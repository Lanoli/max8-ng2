import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { IProject } from './project.model'
import { ProjectService } from './project.service'
import { Observable } from 'rxjs/Observable'


@Injectable()
export class ProjectsResolver implements Resolve<IProject[]>
{
    constructor(private projectService : ProjectService){

    }

    resolve(route: ActivatedRouteSnapshot) : Observable<IProject[]> {
        return this.projectService.getProjects();
    }
}