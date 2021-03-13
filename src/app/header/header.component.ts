import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formSearch;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      nome: ['']
    });
  }

}
