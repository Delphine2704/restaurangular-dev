import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;

  constructor() { }

  ngOnInit() {
    this.searchTerms$
      .pipe(
        tap(x => console.log('avant map', x)),
        map(x => x.toUpperCase()),
        map(uppercased => this.reverse(uppercased)),
        tap(x => console.log('après map', x)),
        debounceTime(3000)
      )
      .subscribe(data => console.log(data));
  }

  reverse(word) {
    return word.split('').reverse().join('');
  }

}
