import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  standard = {
    firstName: 'Benjamin',
    lastName: 'Detard',
    role: 'Accueil',
    award: '',
    phoneNumber: '01-02-88-99-01'
  };

  sommelier = {
    firstName: 'Patrick',
    lastName: 'Vizard',
    role: 'Sommelier',
    award: '',
    phoneNumber: '01-02-88-99-01'
  };

  boucher = {
    firstName: 'Benjamin',
    lastName: 'Detard',
    role: 'Boucher',
    award: '',
    phoneNumber: '01-02-88-99-01'
  };

  constructor() { }

  ngOnInit() {
  }

}
