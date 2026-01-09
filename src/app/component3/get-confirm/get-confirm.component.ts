import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StdUiComponent } from '../std-ui/std-ui.component';
import { StdDashboardComponent } from '../std-dashboard/std-dashboard.component';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {

  constructor(private dailogRef:MatDialogRef<StdDashboardComponent>) { }

  ngOnInit(): void {
  }
  onDelete(){
    this.dailogRef.close(true)
  }
  onCancel(){
    this.dailogRef.close(false)
  }

}
