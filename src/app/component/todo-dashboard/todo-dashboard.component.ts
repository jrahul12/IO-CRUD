import { Component, OnInit } from '@angular/core';
import { todoData } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  editId!: Itodo
  todoArr: Itodo[] = todoData
  constructor() { }

  ngOnInit(): void {
  }
  onAdd(todo: Itodo) {
    console.log(todo);

    this.todoArr.unshift(todo)
  }
  onRemove(id: string) {
    let value = this.todoArr.findIndex(t => t.id === id)
    if (value > -1) {
      this.todoArr.splice(value, 1)
    }
  }
  onEdit(todo: Itodo) {
    this.editId=todo
  }
  onUpdate(todo:Itodo){
    let getIndex=this.todoArr.findIndex(t=>t.id===todo.id)
    if (getIndex>=0) {
      this.todoArr[getIndex]=todo
    }
  }
}
