import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-v4',
  templateUrl: './v4.component.html',
  styleUrls: ['./v4.component.css']
})
export class V4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        740: {
            items: 3,
        },
        940: {
            items: 4,
        },
    },
  };

}
