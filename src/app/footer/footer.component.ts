import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = "Marzuckerberg@gmail.com";
  userName = "finkd";

  constructor() { }

  ngOnInit(): void {
  }

}


