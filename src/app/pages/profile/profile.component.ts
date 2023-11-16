import {Component, OnInit} from '@angular/core';
import {Order} from "../../models/Order";
import {UserControllerService} from "../../services/user-controller.service";
import {OrderDetail} from "../../models/OrderDetail";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  orders: Order[] = [];

  tempAddress = "";
  tempDetails: OrderDetail[] = [];
  constructor(private userService: UserControllerService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.handleOrders();
  }

  handleOrders() {
    this.userService.getUserOrders().subscribe(
      data => {
        this.orders = data
      }
    )
  }

  getDetails(tempOrder: Order) {
    return tempOrder.details;
  }

  getOrderAddress(tempOrder: Order) {
    return tempOrder.region;
  }

  setAddress(order: Order) {
    this.tempAddress = order.state.concat(" "+order.region).concat(" "+order.city).concat(" "+order.phone);
  }

  setDetails(tempOrder: Order) {
    this.tempDetails = tempOrder.details;
  }

  open(targetModal: any, order: Order) {
      this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static',
        size: 'lg'
      });
      this.setDetails(order)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  closeMod() {
    this.modalService.dismissAll('Cross click')
  }
}
