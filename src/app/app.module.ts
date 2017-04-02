import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectService, 
  ProjectListComponent, 
  ProjectThumbnailComponent,
  CategoryService } from './projects/index'

import { HttpModule, JsonpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes'
import { JQ_TOKEN } from './shared/jquery.service'

declare let jQuery : Object

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProjectService,
    CategoryService,
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
