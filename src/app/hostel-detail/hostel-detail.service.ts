import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Booking } from '../bookings';
import { Prices } from '../prices';

@Injectable({
  providedIn: 'root',
})
export class HostelDetailService {
  private prices$ = new Subject<Prices>();
  private booking$ = new Subject<any>();
  private apiUrl = 'http://localhost:5000/api/';

  constructor(private httpClient: HttpClient) {}

  get price() {
    return this.prices$.asObservable();
  }

  get bookings() {
    return this.booking$.asObservable();
  }

  booking(roomBook: Booking) {
    return this.httpClient
      .post<Booking>(`${this.apiUrl}bookings`, roomBook)
      .pipe(
        switchMap((booking) => {
          this.setBooking(booking);
          console.log(booking);
          return of(booking);
        }),
        catchError((err) => {
          return throwError(`Your Booking Details not fetch. Please try again`);
        })
      );
  }

  deleteBooking(id: any) {
    return this.httpClient.delete<any>(`${this.apiUrl}bookings/` + id).pipe(
      switchMap((data) => {
        return of(data);
      }),
      catchError((err) => {
        return throwError(`Your Booking is not deleted. Please try again`);
      })
    );
  }

  private setBooking(bookings: any) {
    this.booking$.next(bookings);
  }
}
