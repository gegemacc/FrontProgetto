import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductControllerService} from "../../services/product-controller.service";
import {CartControllerService} from "../../services/cart-controller.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoryControllerService} from "../../services/category-controller.service";
import {Order} from "../../models/Order";
import {OrderControllerService} from "../../services/order-controller.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{

  order = {} as Order;
  id : number = 0;


  constructor(private dialogRef: MatDialogRef<OrderDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private route: ActivatedRoute,
              private orderService: OrderControllerService) {
    if (data) {
      this.order = data.product;
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.id = params['id'];
      this.loadOrder();
    });
  }

  loadOrder() {
    if (this.id) {
      this.orderService.getOrderById(this.id).subscribe(data => {
        this.order = data;
      });
    }
  }
}
