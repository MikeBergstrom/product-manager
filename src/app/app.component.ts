import { Component, OnDestroy } from '@angular/core';
import { Product } from './product'
import { CommunicateService } from './communicate.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product = new Product();
  products = [{id: 1, title: "Mouse", price:"2.99", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzxt5WonqdyFdQX9OopvGsGEXwRGt8pkrx0PGbLN2LeX8vv3hjVZaZkwFrw" }];
  counter = 2;
  constructor(private _communicateService: CommunicateService){
    _communicateService.updateProducts(this.products)
  }
  updateProducts(){
    this._communicateService.updateProducts(this.products)
  }
}
