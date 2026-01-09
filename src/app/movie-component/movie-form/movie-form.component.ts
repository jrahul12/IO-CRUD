import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Imovie } from 'src/app/model/movie';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit, OnChanges {

  isInEditMode: boolean = false
  @Output() emitUpdate: EventEmitter<Imovie> = new EventEmitter<Imovie>()
  @Input() edit!: Imovie
  @ViewChild('movieForm') movieForm!: NgForm
  @Output() emitAdd: EventEmitter<Imovie> = new EventEmitter<Imovie>()
  constructor(private _uuidServices: ServicesService) { }

  ngOnInit(): void {
  }

  onAdd() {
    if (this.movieForm.valid) {
      let createObj: Imovie = {
        ...this.movieForm.value,
        id: this._uuidServices.uuid()
      }
      this.emitAdd.emit(createObj)
      this.movieForm.reset()
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['edit']['currentValue']) {
      this.movieForm.form.patchValue(changes['edit']['currentValue'])
      this.isInEditMode = true
    }
  }
  onUpdate() {
    if (this.movieForm.valid) {
      let createObj: Imovie = {
        ...this.movieForm.value,
        id: this.edit.id
      }
      this.emitUpdate.emit(createObj)
      this.movieForm.reset()
      this.isInEditMode = false
    }
  }
}
