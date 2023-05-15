import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightServiceService {
  private userName: string;

  public get user(): string {
    return 'test';
  }

  constructor() {}

  public testService(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
  }
}
