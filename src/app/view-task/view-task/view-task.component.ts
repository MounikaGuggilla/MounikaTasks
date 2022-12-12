import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from 'src/app/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
   todos: Observable<Todo[]> | undefined;
    constructor(private todoService: TodoService) {}
  
    ngOnInit() {
      this.todos = this.todoService.todos;
    }
  
    completeTask(event: any, index: any) {
      console.log(event.checked);
      this.todoService.updateList(index, event.checked);
    }
  
    deleteTask(todoId: number) {
      this.todoService.delete(todoId);
    }
}
