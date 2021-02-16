import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let prevScrollpos = window.pageYOffset;

    window.onscroll =  () => {

      const currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top = '-117px';
      }

      prevScrollpos = currentScrollPos;
    };
  }

  toggleMenuItems() {

    const menuServices = document.getElementById('menu-services');

    menuServices.classList.toggle('hidden');
  }

}
