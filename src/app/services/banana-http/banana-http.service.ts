import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Location } from './location';
import { Role } from './role';
import { ScanSticky } from './scan-sticky';
import { Ticket } from './ticket';
import { SelectAction } from './select-action';

@Injectable({
  providedIn: 'root'
})
export class BananaHttpService {
  constructor(private http: HttpClient) {}

  locations(): Observable<Location[]> {
    return this.http.get<Location[]>('http://localhost:8081/api/locations');
  }

  roles(): Observable<Role[]> {
    return this.http.get<Role[]>('http://localhost:8081/api/roles');
  }

  scanSticky(stickyId: string): Observable<ScanSticky> {
    return this.http.get<ScanSticky>(`http://localhost:8081/api/stickies/scan/${ stickyId }`);
  }

  actionSelected(actionSelected: SelectAction): Observable<Ticket> {
    return this.http.post<Ticket>('http://localhost:8081/api/actions', actionSelected);
  }

  ticket(ticketId: string): Observable<Ticket> {
    return this.http.get<Ticket>(`http://localhost:8081/api/tickets/${ ticketId }`);
  }

}
