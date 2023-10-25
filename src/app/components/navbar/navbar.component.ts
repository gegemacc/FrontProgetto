import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public searchQuery='';

  constructor(private route: Router) { }

  ngOnInit(): void {}

  searchForQuery(query: string) {
    this.route.navigate(['/search-page'], {
      queryParams: {
        query: query
      },
      queryParamsHandling: 'merge'
    });
  };


}
