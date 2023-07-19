import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    dots: true,
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
