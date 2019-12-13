import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subjectData: object;
  showMobileMenu = false;
  constructor(private comser: CommunicationService, private router: Router) { }

  ngOnInit() {

    this.streamData();
  }
  streamData() {
    this.comser.getMessage().subscribe(
      (res) => {
        console.log('receiving from header component');
        console.log(res);
        this.subjectData = res;

      }
    );
  }



  toggleNavbar() {
    this.showMobileMenu = !this.showMobileMenu;
  }



}

