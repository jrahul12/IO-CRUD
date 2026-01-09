import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/const/todo';
import { Istd } from 'src/app/model/todo';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  stdArr: Istd[] = students
  editId!: Istd
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(std: Istd) {
    this.stdArr.unshift(std)
  }
  onRemove(id: string) {
    let value = this.stdArr.findIndex(s => s.id === id)
    if (value > -1) {
      this.stdArr.splice(value, 1)
      console.log(id);

    }
  }
  onEdit(std: Istd) {
    this.editId = {...std};
  }
  onUpdate(std:Istd){
    let getIndex=this.stdArr.findIndex(s=>s.id===std.id)
    if (getIndex>0) {
      this.stdArr[getIndex]=std
    }
  }
}
