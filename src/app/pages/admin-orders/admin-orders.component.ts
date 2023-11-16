import {Component, OnInit} from '@angular/core';
import {Order} from "../../models/Order";
import {UserControllerService} from "../../services/user-controller.service";
import {AdminControllerService} from "../../services/admin-controller.service";
import {ActivatedRoute} from "@angular/router";
import {OrderDetail} from "../../models/OrderDetail";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders: Order[] = [];
  id: number = 0;
  tempDetails: OrderDetail[] = [];

  constructor(private adminService: AdminControllerService, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.id = params['id'];
      this.handleOrders();
    });
  }

  handleOrders() {
    this.adminService.getAllOrdersByUserId(this.id).subscribe(
      data => {
        this.orders = data
      }
    )
  }

  open(targetModal: any, order: Order) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.setDetails(order)
  }

  setDetails(tempOrder: Order) {
    this.tempDetails = tempOrder.details;
  }

  closeMod() {
    this.modalService.dismissAll('Cross click')
  }
}
