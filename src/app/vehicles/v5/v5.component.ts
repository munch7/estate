import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-v5',
  templateUrl: './v5.component.html',
  styleUrls: ['./v5.component.css']
})
export class V5Component implements OnInit {

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
