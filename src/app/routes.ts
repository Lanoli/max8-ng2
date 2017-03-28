import { ProjectsResolver, ProjectListComponent } from './projects/index'
import { Routes } from '@angular/router'

export const appRoutes : Routes = [
    {path: 'projects', component: ProjectListComponent }
]