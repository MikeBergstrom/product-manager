import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from '../communicate.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../product'

@Component({
  selector: 'app-reate',
  templateUrl: './reate.component.html',
  styleUrls: ['./reate.component.css']
})
export class ReateComponent implements OnDestroy {
  subscription: Subscription;
  product = new Product;
  products = [];
  counter = 1;

  constructor(private _communicateService: CommunicateService) {
   this.subscription = this._communicateService.observedProducts.subscribe(
     (products) => this.products = products,
     (err) => {},
     () => {}
   )
   }
  
  createProduct(){
    this.product.id = this.counter;
    this.products.push(this.product);
    this._communicateService.updateProducts(this.products);
    this.product = new Product;
    this.counter++;
  } 
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
