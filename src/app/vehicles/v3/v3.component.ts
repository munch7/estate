import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-v3',
  templateUrl: './v3.component.html',
  styleUrls: ['./v3.component.css']
})
export class V3Component implements OnInit {

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
