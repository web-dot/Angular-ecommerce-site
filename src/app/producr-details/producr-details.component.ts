import { Product } from './../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-producr-details',
  templateUrl: './producr-details.component.html',
  styleUrls: ['./producr-details.component.css']
})
export class ProducrDetailsComponent implements OnInit {

  product: Product | undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'))
    //Find the product that correspond with the id provided in route
    this.product = products.find(product => product.id === productIdFromRoute)
  }

}
