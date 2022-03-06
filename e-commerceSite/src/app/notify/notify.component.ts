import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  constructor(private matDialogRef:MatDialogRef<NotifyComponent>) { }

  ngOnInit(): void {
  }
  closeComponent(){
    this.matDialogRef.close()
  }

}
