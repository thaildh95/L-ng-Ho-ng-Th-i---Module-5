import {Component, OnInit} from '@angular/core';
import {Todo} from '../model/todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
// let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // todoing: Todo[] = [];
  // content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    // this.todoService.getAll().subscribe(todo => {
    //   this.todoing = todo;
    // });
  }

  toggleTodo(i: number) {
    // this.todoing[i].complete = !this.todos[i].complete;
  }

  //
  // change() {
  //   const value = this.content.value;
  //   if (value) {
  //     const todo: Todo = {
  //       id: _id++,
  //       content: value,
  //       complete: false
  //     };
  //     this.todoing.push(todo);
  //     this.content.reset();
  //   }
  // }
}
