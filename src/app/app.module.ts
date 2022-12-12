import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task/view-task.component';
import { TodoService } from './task.service';
import { HelloComponent } from './hello.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTaskComponent,
    HelloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
// import { AddTaskComponent } from './add-task/add-task.component';
// import { ViewTasksComponent } from './view-tasks/view-tasks.component';
// import { TodoService } from './service/task.service';

// @NgModule({
//   imports: [BrowserModule, FormsModule, ReactiveFormsModule],
//   declarations: [
//     AppComponent,
//     HelloComponent,
//     AddTaskComponent,
//     ViewTasksComponent,
//   ],
//   bootstrap: [AppComponent],
//   providers: [TodoService],
// })
// export class AppModule {}
