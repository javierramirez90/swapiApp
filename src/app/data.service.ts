import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { stringify } from 'querystring';
// 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class DataService {
  
  urlPeople: string = 'https://swapi.co/api/people/';
  urlPlanets: string = "https://swapi.co/api/planets/";
  urlStarships: string = "https://swapi.co/api/starships/";

  constructor(private http: HttpClient) { }

  getPeople() {
    
    let peopleArr: Object[] = [];
    this.http.get(this.urlPeople)
      .toPromise()
      .then(response => { 
        let helper: Object[] = Object.values(response);
        console.log(helper);
        let info = helper[helper.length -1];
        console.log(info);
        console.log(typeof(info));
        for(let i = 0; i < 10; i++){
          peopleArr.push(info[i]);
        }
        
        // Object.values(response)[] 
        // .forEach(res => { peopleArr.push(res[res.lenght - 1])
        // });
        // peopleArr.push(response.results)
      })
      console.log(peopleArr)
      return peopleArr;
  }

  getPlanets(){
    let planetsArr: Object[] = [];
    this.http.get(this.urlPlanets)
      .toPromise()
      .then(response => {
        for(let i =0; i < 10; i++){
          planetsArr.push(response);        }
      })
    return planetsArr;
  }

  getstarships(){
    let starArr: Object[] = [];
    this.http.get(this.urlStarships)
      .toPromise()
      .then(response => {
        for(let i = 0; i < 10; i++){
          starArr.push(response)
        }
      })
    return starArr;
  }
}
