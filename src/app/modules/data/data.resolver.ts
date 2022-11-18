import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<string[]> {

  constructor() {
  }

  getData(): Observable<string[]> {
    return of(['Data1', 'Data2', 'Data3', 'Data4']).pipe(delay(2000));
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return this.getData();
  }
}
