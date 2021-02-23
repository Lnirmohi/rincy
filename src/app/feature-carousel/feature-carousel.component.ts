import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';

@Component({
  selector: 'app-feature-carousel',
  templateUrl: './feature-carousel.component.html',
  styleUrls: ['./feature-carousel.component.css']
})
export class FeatureCarouselComponent implements OnInit {

  features: any[] = [{
      id: 1,
      imgPath: '../../assets/images/img-1.jpg',
      title: 'Lorem Ipsum',
      body: `1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officiis quaerat explicabo accusantium quo atque
            rerum ex aspernatur id voluptatum impedit.`
    },

    {
      id: 2,
      imgPath: '../../assets/images/img-1.jpg',
      title: 'Lorem Ipsum',
      body: `2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officiis quaerat explicabo accusantium quo atque
            rerum ex aspernatur id voluptatum impedit.`
    },

    {
      id: 3,
      imgPath: '../../assets/images/img-1.jpg',
      title: 'Lorem Ipsum',
      body: `3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officiis quaerat explicabo accusantium quo atque
            rerum ex aspernatur id voluptatum impedit.`
    },

    {
      id: 4,
      imgPath: '../../assets/images/img-1.jpg',
      title: 'Lorem Ipsum',
      body: `4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officiis quaerat explicabo accusantium quo atque
            rerum ex aspernatur id voluptatum impedit.`
    },

    {
      id: 5,
      imgPath: '../../assets/images/img-1.jpg',
      title: 'Lorem Ipsum',
      body: `5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officiis quaerat explicabo accusantium quo atque
            rerum ex aspernatur id voluptatum impedit.`
    }
  ];

  options: NgxSiemaOptions;

  constructor(private ngxSiemaService: NgxSiemaService) {}

  ngOnInit(): void {

    this.options = {
      selector: '.siema',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: false,
      onInit: () => {
        // runs immediately after first initialization
      },
      onChange: () => {
        // runs after slide change
      },
    };
  }

  prev() {
    this.ngxSiemaService.prev(1).subscribe((data: any) => console.log(data));
  }

  next() {
    this.ngxSiemaService.next(1).subscribe((data: any) => console.log(data));
  }

  goTo() {
    this.ngxSiemaService.goTo(1).subscribe((data: any) => console.log(data));
  }
}
