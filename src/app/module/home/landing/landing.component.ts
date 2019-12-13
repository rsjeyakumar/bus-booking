import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../../../shared/services/http.service';
import { CommunicationService } from '../../../shared/services/communication.service';
import { EndPoints } from '../../../shared/services/end-points.enum';

import { RESPONSE, CITY } from '../../../models/app.models';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  busSearch: FormGroup;
  searchSpin: boolean;
  cityList: CITY[];
  filteredCity: CITY[];
  minDate: Date;
  maxDate: Date;
  listBuss: RESPONSE[];

  constructor(private http: HttpService, private router: Router, private passdata: CommunicationService) { }

  ngOnInit() {

    /* Min and Max Date Setup */
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const nextMonth = (month === 11) ? 0 : month + 1;
    const nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    /* Loginform creation */
    this.busSearch = new FormGroup({
      source: new FormControl(null, [Validators.required]),
      destination: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required])
    });

    this.getCity();

  }

  /* Get cities */
  getCity() {
    this.http.readData(EndPoints.Cities).subscribe(
      (res: CITY[]) => {
        this.cityList = res;
      }
    );
  }


  /* filter the city for Destination based on source selection */
  cityFilter() {
    this.filteredCity = this.cityList.filter((value, index, arr) => {
      return value.name !== this.busSearch.value.source;
    });
  }


  /* Navigate to ticket booking page */
  ticketBooking() {
    this.router.navigate(['ticketbooking']);
  }

  /* search bus api submit */
  searchBus() {
    this.searchSpin = true;
    const endpointurl = `${EndPoints.Search}?source="bangalore"&destination="chennai"&date="dd/mm/yyyy"`;
    this.http.readData(endpointurl).subscribe(
      (res: RESPONSE) => {
        this.searchSpin = false;
        this.listBuss = res.getList;
      }
    );
  }


}
