import { Component, OnInit } from '@angular/core';
import { Prices } from '../prices';
import { Availability } from '../availability';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth/auth.service';
import { Booking } from '../bookings';
import { Subscription } from 'rxjs';
import { HostelDetailService } from './hostel-detail.service';

@Component({
  selector: 'hostel-hostel-detail',
  templateUrl: './hostel-detail.component.html',
  styleUrls: ['./hostel-detail.component.css'],
})
export class HostelDetailComponent implements OnInit {
  user: User;
  roomBook: Booking;
  booking: any;
  room: any[];
  prices: Prices;
  userSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private hostelDetails: HostelDetailService,
    private router: Router
  ) {
    this.authService.findMe().subscribe((user) => (this.user = user));

    console.log(this.user);
  }

  clicked = false;

  success() {
    this.router.navigate(['booking'], {
      state: {
        username: this.booking.username,
        roomType: this.booking.roomType,
        gender: this.booking.gender,
        id: this.booking._id,
        createdAt: this.booking.createdAt,
        price: this.booking.price,
      },
    });
  }

  girlSuperDeluxe() {
    if (!this.user) {
      console.log(this.user);
      alert('Login or SignUp to page');
    } else {
      this.roomBook = {
        username: this.user.username,
        roomType: 'Super Deluxe',
        gender: 'female',
        price: 500,
      };
      this.hostelDetails.booking(this.roomBook).subscribe(
        (booking) => {
          this.booking = booking;
          //this.router.navigate([''])
        },
        (err) => err
      );
      this.success();
    }
  }

  boySuperDeluxe() {
    if (!this.user) {
      console.log(this.user);
      alert('Login or SignUp to page');
    } else {
      this.roomBook = {
        username: this.user.username,
        roomType: 'Super Deluxe',
        gender: 'male',
        price: 500,
      };
      this.hostelDetails.booking(this.roomBook).subscribe(
        (booking) => {
          this.booking = booking;
          //this.router.navigate([''])
        },
        (err) => err
      );
      this.success();
    }
  }

  girlDeluxe() {
    if (!this.user) {
      console.log(this.user);
      alert('Login or SignUp to page');
    } else {
      this.roomBook = {
        username: this.user.username,
        roomType: 'Deluxe',
        gender: 'female',
        price: 300,
      };
      this.hostelDetails.booking(this.roomBook).subscribe(
        (booking) => {
          this.booking = booking;
          //this.router.navigate([''])
        },
        (err) => err
      );
      this.success();
    }
  }

  boyDeluxe() {
    if (!this.user) {
      console.log(this.user);
      alert('Login or SignUp to page');
    } else {
      this.roomBook = {
        username: this.user.username,
        roomType: 'Deluxe',
        gender: 'male',
        price: 300,
      };
      this.hostelDetails.booking(this.roomBook).subscribe(
        (booking) => {
          this.booking = booking;
          //this.router.navigate([''])
        },
        (err) => err
      );
      this.success();
    }
  }

  girlStandard() {
    if (!this.user) {
      console.log(this.user);
      alert('Login or SignUp to page');
    } else {
      this.roomBook = {
        username: this.user.username,
        roomType: 'Standard',
        gender: 'female',
        price: 200,
      };
      this.hostelDetails.booking(this.roomBook).subscribe(
        (booking) => {
          this.booking = booking;
          //this.router.navigate([''])
        },
        (err) => err
      );
      this.success();
    }
  }

  boyStandard() {
    if (!this.user) {
      console.log(this.user);
      alert('Login or SignUp to page');
    } else {
      this.roomBook = {
        username: this.user.username,
        roomType: 'Standard',
        gender: 'male',
        price: 200,
      };
      this.hostelDetails.booking(this.roomBook).subscribe(
        (booking) => {
          this.booking = booking;
          //this.router.navigate([''])
        },
        (err) => err
      );
      this.success();
    }
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
