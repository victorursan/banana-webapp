import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Location } from './location';
import { Role } from './role';
import { ScanSticky } from './scan-sticky';
import { Ticket } from './ticket';
import { SelectAction } from './select-action';
import { UpdateTicketState } from './update-ticket-state';
import { PersonnelFilter } from './personnel-filter';
import { Personnel } from './personnel';
import { UpdatePersonnel } from './update-personnel';
import { AddLocation } from './add-location';

@Injectable({
  providedIn: 'root',
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
    return this.http.get<ScanSticky>(
      `http://localhost:8081/api/stickies/scan/${stickyId}`
    );
  }

  actionSelected(actionSelected: SelectAction): Observable<Ticket> {
    return this.http.post<Ticket>(
      'http://localhost:8081/api/actions',
      actionSelected
    );
  }

  ticket(ticketId: string): Observable<Ticket> {
    return this.http.get<Ticket>(
      `http://localhost:8081/api/tickets/${ticketId}`
    );
  }

  allTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('http://localhost:8081/api/tickets');
  }

  ticketUpdate(
    ticketId: string,
    ticketUpdate: UpdateTicketState
  ): Observable<Ticket> {
    return this.http.put<Ticket>(
      `http://localhost:8081/api/tickets/${ticketId}`,
      ticketUpdate
    );
  }

  allPersonnel(personnelFilter: PersonnelFilter): Observable<Personnel[]> {
    let params = new HttpParams().append(
      'operating',
      String(personnelFilter.operating)
    );
    if (personnelFilter.username) {
      params = params.append('username', personnelFilter.username);
    }
    return this.http.get<Personnel[]>('http://localhost:8081/api/personnel', {
      params: params,
    });
  }

  updatePersonnel(personnelId: string, updatePersonnel: UpdatePersonnel): Observable<Personnel> {
    return this.http.put<Personnel>(`http://localhost:8081/api/personnel/${personnelId}`, updatePersonnel);
  }

  addLocation(addLocation: AddLocation): Observable<Location> {
    return this.http.post<Location>('http://localhost:8081/api/locations', addLocation);
  }

}
