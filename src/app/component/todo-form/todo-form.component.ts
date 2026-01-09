import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  @Output() emitUpdate: EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() edit!: Itodo
  @Output() emitAdd: EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @ViewChild('todoForm') todoForm!: NgForm
  isInEditMode: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  onAdd() {
    if (this.todoForm.valid) {
      const createObj: Itodo = {
        ...this.todoForm.value,
        id: Date.now().toString()
      };

      this.emitAdd.emit(createObj);
      this.todoForm.resetForm();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['edit']['currentValue']) {
      this.isInEditMode = true
      this.todoForm.form.patchValue(changes['edit']['currentValue'])
    }
  }
  onUpdate() {
    if (this.todoForm.valid) {
      let createObj: Itodo = {
        ...this.todoForm.value,
        id:this.edit.id
      }
      this.emitUpdate.emit(createObj)
      this.isInEditMode=false
      this.todoForm.reset()
    }
  }
}
