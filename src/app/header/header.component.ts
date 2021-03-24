import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let prevScrollpos = window.pageYOffset;

    window.onscroll =  () => {

      const currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top = '-200px';
      }

      prevScrollpos = currentScrollPos;
    };
  }

}
