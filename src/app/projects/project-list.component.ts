import { Component } from '@angular/core'
import { ProjectService ,IProject } from './index'

@Component({ templateUrl: 'project-list.component.html'
})
export class ProjectListComponent{

constructor(private projectService : ProjectService){}

projects : IProject[]
errorMessage: any

  ngOnInit()
  {
    this.projectService.getProjects().subscribe(
      projects => { 
          this.projects = projects
         },
      error => this.errorMessage = <any>error
    )

  }

}