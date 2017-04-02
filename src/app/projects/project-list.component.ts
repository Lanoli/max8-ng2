import { Component,Inject } from '@angular/core'
import { CategoryService }  from './category.service'
import { IProject } from './project.model'
import { ICategory } from './category.model'
import { ProjectService } from './project.service'
import { JQ_TOKEN } from '../shared/jquery.service'

@Component({ 
  templateUrl: 'project-list.component.html',
  styles:  [`
    .filter {
      background-color: transparent;
      margin-bottom:10px;
    }
    .filter .btn {
      margin-left:0px;
      margin-right:5px;
      margin-bottom:5px;
    }
  `]
})
export class ProjectListComponent{


constructor(private projectService : ProjectService,
private categoryService : CategoryService){}

projects : IProject[]
categories : ICategory[]
errorMessage: any

  ngOnInit()
  {
    this.projectService.getProjects().subscribe(
      projects => { 
          this.projects = projects
         },
      error => this.errorMessage = <any>error
    )

    this.categoryService.getCategories().subscribe(
      categories => { 
          this.categories = categories
         },
      error => this.errorMessage = <any>error
    )

    
  }


}