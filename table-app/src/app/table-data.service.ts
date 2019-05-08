import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  private dataUrl = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
