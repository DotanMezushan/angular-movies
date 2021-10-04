import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }
  
  isAuthenticated(): boolean {
    return true;
  }
  getRole(): string {
    return 'admin';//
  }

}
