import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../../../../mfe1/src/app/flights/flight-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  user = this.fService.user;
  constructor(private fService: FlightServiceService) {}

  ngOnInit() {}
}
