import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lfg';
  splash = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.splash = !this.splash;
    }, 7000);
  }


}
