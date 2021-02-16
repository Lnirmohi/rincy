import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'vedamrit';
  displayMobileNavbar: boolean;
  mql: MediaQueryList;

  constructor() {
    this.displayMobileNavbar = false;
    this.mql = window.matchMedia('screen and (max-width: 986px)');
  }

  ngOnInit(): void {
    this.mql.addEventListener('change', this.navbarListener);
  }

  // to preserve this(component context) use arrow function
  // otherwise this context gets assigned to mediaMatch
  // because of eventListener
  navbarListener = (mediaMatch) => {

    if (mediaMatch.matches) {
      console.log('this.displayMobileNavbar ', this.displayMobileNavbar);
      this.displayMobileNavbar = true;
    } else {
      console.log('this.displayMobileNavbar ', this.displayMobileNavbar);
      this.displayMobileNavbar = false;
    }

  }

}
