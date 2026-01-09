import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/model/todo';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Output() emitEdit:EventEmitter<Istd>=new EventEmitter<Istd>()
  @Output() emitRemove:EventEmitter<string>=new EventEmitter<string>()
  @Input() std!: Istd[]
  constructor() { }

  ngOnInit(): void {
  }
  onRemove(id:string){
    this.emitRemove.emit(id)
  }
  onEdit(std:Istd){
    this.emitEdit.emit(std)
  }
}
