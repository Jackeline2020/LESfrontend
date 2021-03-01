import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(public dialog: MatDialog) { }
  
  openDialog() {
    this.dialog.open(ContentComponentDialog);
  }
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.modal.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponentDialog {}