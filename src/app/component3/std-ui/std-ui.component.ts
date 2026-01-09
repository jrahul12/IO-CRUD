import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Istd } from 'src/app/model/todo';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-std-ui',
  templateUrl: './std-ui.component.html',
  styleUrls: ['./std-ui.component.scss']
})
export class StdUiComponent implements OnInit {


  @Output() emitEdit: EventEmitter<Istd> = new EventEmitter<Istd>()
  @Output() emitRemove: EventEmitter<string> = new EventEmitter<string>()
  @Input() std!: Istd[]
  constructor(private _matDailog: MatDialog) { }

  ngOnInit(): void {
  }

  onRemove(id: string) {
      this.emitRemove.emit(id)
  }
  onEdit(std: Istd) {
    this.emitEdit.emit(std)
  }
}
