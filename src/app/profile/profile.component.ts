import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';

@Component({
  selector: 'pm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;

  userProfile = new FormGroup({
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.findMe().subscribe((user) => {
      this.user = user;
      this.userProfile.controls['username'].setValue(user.username);
      this.userProfile.controls['firstName'].setValue(user.firstName);
      this.userProfile.controls['lastName'].setValue(user.lastName);
      this.userProfile.controls['mobileNumber'].setValue(user.mobileNumber);
      this.userProfile.controls['email'].setValue(user.email);
    });

    this.userProfile.get('username')!.disable();
    this.userProfile.get('firstName')!.disable();
    this.userProfile.get('lastName')!.disable();
    this.userProfile.get('mobileNumber')!.disable();
    this.userProfile.get('email')!.disable();
  }

  updateUserProfile() {
    console.log(this.userProfile);
    this.http
      .put<any>(
        `http://localhost:5000/api/users/` + this.user._id,
        this.userProfile.value
      )
      .subscribe(
        (response) => {
          alert('Successfully Updated !!');
          if (response.statusCode === 200) {
            // Reset the file input
            console.log(response.body);
            this.user = response.body.data;
          }
        },
        (er) => {
          console.log(er);
          alert(er.error.error);
        }
      );
  }

  ngOnInit(): void {}
}
