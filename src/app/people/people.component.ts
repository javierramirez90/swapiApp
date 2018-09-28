import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {


  // people$: Object;
  people: Object[];
  persnn: string;



  constructor(private data: DataService) { }

  ngOnInit() {

    this.people= this.data.getPeople();
    // this.persnn = this.people[0].homeworld.;

    // this.people$= this.data.getPeople()
    // .subscribe(
    //   data => this.people$ = data
    // );
    console.log(this.people)
  }

}
