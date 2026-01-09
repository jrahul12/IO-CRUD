import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { students } from 'src/app/const/todo';
import { Istd } from 'src/app/model/todo';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {

  editId!: Istd
  studentArr: Istd[] = students
  constructor(private _matDailog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onAdd(std: Istd) {
    this.studentArr.unshift(std)
    this.snackBar.open(`STUDENT ADDED SUCCESSFULLY`, 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }
  onRemove(id: string) {
    let dailog = this._matDailog.open(GetConfirmComponent, {
      width: '400px',
      disableClose: true
    })
    dailog.afterClosed().subscribe((input: boolean) => {
      if (input) {
        let value = this.studentArr.findIndex(s => s.id === id)
        if (value > -1) {
          this.studentArr.splice(value, 1)
        }
        this.snackBar.open(`STUDENT REMOVED SUCCESSFULLY`, 'close', {
          horizontalPosition: 'left',
          verticalPosition: 'top',
          duration: 3000
        })
      }
    })
  }
  onEdit(std: Istd) {
    this.editId = { ...std }
  }
  onUpdate(std: Istd) {
    let getIndex = this.studentArr.findIndex(s => s.id === std.id)
    if (getIndex >= 0) {
      this.studentArr[getIndex] = std
    }
    this.snackBar.open(`STUDENT UPDATED SUCCESSFULLY`, 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
