import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})

export class PhoneComponent implements OnInit {
  @Input()
  user: any;

  constructor() { }

  ngOnInit() {
  }

}
