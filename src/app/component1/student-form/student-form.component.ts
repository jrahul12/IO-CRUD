import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/todo';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {

  @Output() emitAdd: EventEmitter<Istd> = new EventEmitter<Istd>
  @ViewChild('stdForm') stdForm!: NgForm
  @Output() emitUpdate: EventEmitter<Istd> = new EventEmitter<Istd>
  @Input() edit!: Istd
  isInEditMode: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.stdForm.valid) {
      let createObj: Istd = {
        ...this.stdForm.value,
        id: Date.now().toString()
      }
      this.emitAdd.emit(createObj)
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['edit']['currentValue']) {
      this.isInEditMode = true
      this.stdForm.form.patchValue(changes['edit']['currentValue'])
    }
  }
  onUpdate() {
    if (this.stdForm.valid) {
      let createObj: Istd = {
        ...this.stdForm.value,
        id: this.edit.id
      }
      this.isInEditMode = false
      this.stdForm.resetForm()
      this.emitUpdate.emit(createObj)
    }
  }
}
