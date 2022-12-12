import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  todoForm: FormGroup | undefined;
  todo: any;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
  }

  addTasks() {
    // this.todoService.create({
    //   value: this.newMethod().controls['todo'].value,
    //   completed: false,
    // });
    // this.todo.reset();
  }

  private newMethod() {
    return this.todoForm;
  }
}