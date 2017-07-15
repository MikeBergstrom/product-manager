import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CommunicateService } from '../communicate.service';
import { Subject } from 'rxjs/Subject';
import { Product } from '../product'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnDestroy {
  subscription: Subscription;
  product = new Product();
  products = [];
  id=0;

  constructor(private router: Router, private _route: ActivatedRoute, private _communicateService: CommunicateService) {
    this._route.params.subscribe((param)=>{
      this.id = param.id;
      console.log(this.id);
      console.log(this.products)
    })
    this._communicateService.observedProducts.subscribe(
      (products) => this.products = products,
      (err) => {},
      () => {}
    )
   }
  updateProduct(formData){
    this._communicateService.updateProducts(this.products);
    this.router.navigateByUrl('products')
  }
  deleteProduct(){
    for(let i=0; i<this.products.length; i++){
      if(this.products[i].id == this.id){
        this.products.splice(i, 1)
      }
    }
    this._communicateService.updateProducts(this.products);
    this.router.navigateByUrl('products')
  }
  ngOnDestroy() {
    
  }

}
