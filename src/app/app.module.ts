import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatDialogModule, MatChipsModule, MatExpansionModule, MatTableModule } from '@angular/material'

import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskService } from './task/shared/task.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './task/shared/category.service';
import { RequesterService } from './requester/shared/requester.service';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

const appRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "tasks/:id",
    component: ViewTaskComponent
  },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/dashboard"
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    DashboardComponent,
    CreateTaskComponent,
    ViewTaskComponent,
    ChatboxComponent
  ],
  entryComponents: [
    CreateTaskComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    

    // Angular Material
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    MatTableModule,
    // forms
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule
  ],
  providers: [
    TaskService,
    CategoryService,
    RequesterService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
