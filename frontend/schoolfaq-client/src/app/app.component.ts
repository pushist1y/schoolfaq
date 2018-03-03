import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router,
    public dialog: MatDialog) {
  }


  title = 'app';

  homeClick() {
    this.router.navigateByUrl("/home");
  }

  faqClick() {
    this.router.navigateByUrl("/faq");
  }
}
