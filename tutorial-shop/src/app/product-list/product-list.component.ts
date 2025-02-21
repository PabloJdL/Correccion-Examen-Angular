import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../product';
import { ProductAlertsComponent } from "../product-alerts/product-alerts.component";

@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgIf, ProductAlertsComponent, RouterLink ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
