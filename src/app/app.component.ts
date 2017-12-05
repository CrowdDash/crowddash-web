import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenav') public sidenavElem: ElementRef;

  opened: boolean = true;

  title: string = 'app';

  constructor() {
    this.opened = true;
  }

  ngOnInit() {
    this.opened = true;
  }

  ngAfterViewInit() {
    // this.sidenav.open();
    

    // this.sidenav.openedChange.subscribe((opened: boolean) => {
    //   this.opened = opened;
    // });

    // this.sidenav.openedStart.subscribe(() => {
    //   this.opened = true;
    // })

    // this.sidenav.closedStart.subscribe(() => {
    //   this.opened = false;
    // });
  }

  public toggleSidenav() {
    this.opened = !this.opened;

  }
}
