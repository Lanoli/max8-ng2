import { Component, Input } from '@angular/core'
import { IProject } from './index'

@Component({
    selector: 'project-thumbnail',
    templateUrl: 'project-thumbnail.component.html'
})
export class ProjectThumbnailComponent
{
    @Input() project : IProject
    
}