import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-app-footer',
  templateUrl: './web-app-footer.component.html',
  styleUrls: ['./web-app-footer.component.scss']
})
export class WebAppFooterComponent implements OnInit {
  year: string = new Date().getFullYear().toString();
  footerContent = this.year + '© copyrigth';
  constructor() { }

  ngOnInit(): void {
  }

}
