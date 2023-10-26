import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { faCartShopping, faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public searchQuery='';

  loginIcon = faRightFromBracket;
  searchIcon = faMagnifyingGlass;
  cartIcon = faCartShopping;

  constructor(private route: Router) { }

  ngOnInit(): void {}

  searchForQuery(query: string) {
    this.route.navigate(['/search-page'], {
      queryParams: {
        query: query
      },
      queryParamsHandling: 'merge'
    });
  }

}
