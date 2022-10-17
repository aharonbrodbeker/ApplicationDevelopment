import {Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {CakeService} from "../../../core/services/cake.service";
import {Cake} from "../../../shared/models/cake";
import {CartService} from "../../../core/services/cart.service";

@Component({
  selector: 'app-birthday-cakes',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  constructor(private cakeService: CakeService, private cartService: CartService) {
  }

  quantity: Observable<number>
  cakes$: Observable<Cake[]>;

  ngOnInit(): void {
    this.quantity = this.cartService.productsQuantity$()
    this.cakes$ = this.cakeService.getProducts$().pipe(map((cakes) => cakes.filter(cake => cake.category === 'birthdayCakes')))


  }

  addCake(cake: Cake) {
    this.cartService.addProduct(cake)
    this.cartService.getCart$().subscribe(console.log)
  }

  removeCake(cakeName: string) {
    this.cartService.removeProduct(cakeName)
  }

  isincart(cakeName: string) {
    return !!this.cartService.cart$.getValue()[cakeName]
  }
}