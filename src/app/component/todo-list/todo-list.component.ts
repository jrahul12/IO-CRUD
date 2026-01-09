import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Output() emitEdit:EventEmitter<Itodo>=new EventEmitter<Itodo>()
  @Output() emitRemove:EventEmitter<string>=new EventEmitter<string>
  @Input() todo!:Itodo
  constructor() { }

  ngOnInit(): void {
  }
  onRemove(id:string){
    this.emitRemove.emit(id)
  }
  onEdit(todo:Itodo){
    this.emitEdit.emit(todo)
  }
}
