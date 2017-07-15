import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from '../communicate.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../product'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  subscription: Subscription;
  products = [];
  constructor(private _communicateService: CommunicateService) {
   this.subscription = this._communicateService.observedProducts.subscribe(
     products => this.products = products,
     (err) => {},
     () => {}
   );
   }


  ngOnInit() {
  }

}
