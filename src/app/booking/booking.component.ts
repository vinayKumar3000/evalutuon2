import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../bookings';
import { HostelDetailService } from '../hostel-detail/hostel-detail.service';

@Component({
  selector: 'pm-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  username: any;
  roomType: any;
  gender: any;
  res:any;
  id: any;
  routeState: any;
  createdAt: any;
  constructor(
    private router: Router,
    private hostelDetails: HostelDetailService
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router.getCurrentNavigation()?.extras.state;
      if (this.routeState) {
        this.username = this.routeState.username;
        this.roomType = this.routeState.roomType;
        this.gender = this.routeState.gender;
        this.id = this.routeState.id;
        this.createdAt = this.routeState.createdAt;
      }
    }
  }

  deleteBooking() {
    this.hostelDetails.deleteBooking(this.id).subscribe((res)=>(this.res=res));
    this.router.navigate(['dashboard']);
  }

  ngOnInit(): void {}
}
