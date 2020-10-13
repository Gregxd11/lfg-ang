import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  splash = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.splash = false;
    }, 7000);
  }

}
